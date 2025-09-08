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

    const input = resumeRef.current;

    const images = input.querySelectorAll("img");
    await Promise.all(
        Array.from(images).map(
            (img) =>
                new Promise((resolve) => {
                    if (img.complete) resolve();
                    else img.onload = img.onerror = resolve;
                })
        )
    );

    await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 100)));

    try {
        const dataUrl = await toPng(input, {
            cacheBust: true,
            backgroundColor: "#ffffff",
            pixelRatio: 2,
            style: {
                margin: 0,
                padding: 0,
                transform: 'none'
            }
        });

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (input.offsetHeight * pdfWidth) / input.offsetWidth;
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("my-resume.pdf");
    } catch (err) {
        console.error("Error generating PDF", err);
    }
};

export default handleDownload;
