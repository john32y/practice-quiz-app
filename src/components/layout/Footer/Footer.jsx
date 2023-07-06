export default function Footer() {

const fullYear = new Date().getFullYear();


    return (
        <footer>
            <p>&copy; {fullYear}</p>
        </footer>
    );
};