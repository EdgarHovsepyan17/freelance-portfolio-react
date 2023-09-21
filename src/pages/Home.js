import Header from "../components/header/Header";

const Home = () => {
    return ( 
        <>
            <Header/>

            <main className="section">
                <div className="container">
                        <h1 className="title-1">Skills</h1>

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Hard skills</h2>
                                <p>JavaScript, ReactJS,  Redux, HTML, CSS, Sass, NPM, BootStrap,Node.js , Git, GitHub</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Additional skills</h2>
                                <p>Advanced English,Proficiency in Russan,love to learn new things, improve myself and ask questions</p>
                            </li>
                        </ul>

                </div>
            </main>
        </>
     );
}
 
export default Home;