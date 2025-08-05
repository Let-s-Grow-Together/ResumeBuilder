
import { createServer } from 'miragejs';
import { templates } from '../data/templates';
import mockUserData from '../data/mockUserData';


export function makeServer() {

    createServer({
        routes() {
            this.namespace = 'api'

            this.get('/templates', () => {
                return {
                    templates
                }
            });
            this.get('/user-data', () => {
                return {
                    data: mockUserData
                }
            });

            let initialReviews = [
                { id: '1', name: 'Amit', text: 'Awesome platform to build resumes quickly!' },
                { id: '2', name: 'Sneha', text: 'Very user-friendly and efficient.' },
                { id: '3', name: 'Raj', text: 'Helped me land my first interview. Thanks!' },
                { id: '4', name: 'Pooja', text: 'Clean design and easy export. Loved it.' },
                { id: '5', name: 'Karan', text: 'Best resume builder I have ever used!' },
                { id: '6', name: 'Anjali', text: 'Templates are modern and professional.' },
                { id: '7', name: 'Vikram', text: 'A lifesaver when applying for jobs.' },
                { id: '8', name: 'Meena', text: 'Highly recommended for freshers!' },
                { id: '9', name: 'Arjun', text: 'Resume preview feature is top-notch.' },
                { id: '10', name: 'Divya', text: 'Simple, fast, and effective.' },
                { id: '11', name: 'Ravi', text: 'My resume got noticed because of this tool.' },
                { id: '12', name: 'Komal', text: 'No ads, clean interface. 5 stars!' },
                { id: '13', name: 'Manish', text: 'Highly customizable resume builder.' },
                { id: '14', name: 'Priya', text: 'Easy to download resumes in PDF.' },
                { id: '15', name: 'Harsh', text: 'Great fonts and layout choices.' },
                { id: '16', name: 'Nisha', text: 'Mobile-friendly and super fast.' },
                { id: '17', name: 'Yash', text: 'Loved the minimalistic UI.' },
                { id: '18', name: 'Neha', text: 'Perfect tool for job seekers.' },
                { id: '19', name: 'Rohit', text: 'Quick sharing options are amazing.' },
                { id: '20', name: 'Shreya', text: 'Simple process from start to finish.' },
            ];


            this.get('/reviews', () => {
                return {
                    reviews: JSON.parse(localStorage.getItem('reviews')) || initialReviews,
                };
            });

            this.post('/reviews', (schema, request) => {
                let newReview = JSON.parse(request.requestBody);
                let stored = JSON.parse(localStorage.getItem('reviews')) || initialReviews;
                stored.push(newReview);
                localStorage.setItem('reviews', JSON.stringify(stored));
                return { success: true, review: newReview };
            });
        }
    });

}

