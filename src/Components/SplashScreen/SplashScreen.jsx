import './SplashScreen.css';
export default function SplashScreen () {
    return (
        <div className='splash-screen d-flex justify-content-center align-items-center'>
            <img 
                className="splash-logo" 
                style={{ width: '80px', height: '80px' }} 
                src={`${process.env.PUBLIC_URL}/assets/icons/logo-icon.png`}
                alt='splash-screen'
            />
        </div>
    );
}
