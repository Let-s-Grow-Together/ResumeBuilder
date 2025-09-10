import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import { supabase } from "../supabaseClient";

const handleDownload = async (resumeRef, editModeFromURL, navigate) => {
    if (editModeFromURL) {
        alert("Please save your resume before downloading.");
        return;
    }

    const { data: { user: currentUser } } = await supabase.auth.getUser();

    if (!currentUser) {
        navigate("/auth");
        return;
    }

    const container = resumeRef.current;

    const resumePages = container.querySelectorAll(".resume-view");
    if (!resumePages.length) {
        console.warn("No .resume-view elements found");
        return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    let isFirstPage = true;

    for (const page of resumePages) {
        const images = page.querySelectorAll("img");
        await Promise.all(
            Array.from(images).map((img) =>
                new Promise((resolve) => {
                    if (img.complete) resolve();
                    else img.onload = img.onerror = resolve;
                })
            )
        );

        await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 100)));

        try {
            const dataUrl = await toPng(page, {
                cacheBust: true,
                backgroundColor: "#ffffff",
                pixelRatio: 2,
                style: {
                    transform: 'none'
                }
            });

            const imgProps = {
                width: pdfWidth,
                height: (page.offsetHeight * pdfWidth) / page.offsetWidth,
            };

            if (!isFirstPage) {
                pdf.addPage();
            } else {
                isFirstPage = false;
            }

            pdf.addImage(dataUrl, "PNG", 0, 0, imgProps.width, imgProps.height);
        } catch (err) {
            console.error("Error generating PDF page", err);
        }
    }

    pdf.save("my-resume.pdf");
};

export default handleDownload;
