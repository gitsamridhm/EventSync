import './404error.css';

function NotFoundPage() {
    return (
        <div>
            <title>404 Error Page</title>
            <link rel="stylesheet" href="404error.css"/>

            <h1>Uhh...</h1>
            <p className="zoom-area">Page not found</p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
        </div>
    ); 
}

export default NotFoundPage;
