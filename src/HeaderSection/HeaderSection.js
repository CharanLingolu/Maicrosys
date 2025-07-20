import './HeaderSection.css';

const HeaderSection=()=>{
    return(
        <div>
            <nav>
                <header>
                <ul>
                    <img src='/logo.png' className='logo' alt='logo'></img>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Industries</a>
                    <a href="/">Pricing</a>
                    <a href="/">Partner with us</a>
                    <a href="/"><button className='talkBtn'>Talk to us</button></a>
                </ul>
                </header>
            </nav>
        </div>
    )
}

export default HeaderSection;