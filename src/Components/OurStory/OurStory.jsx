import './OurStory.css';

export default function OurStory () {

    return ( 
        <section 
        className='our-story container pt-5 mb-5 d-flex flex-column-reverse flex-lg-row align-items-start align-items-lg-center justify-content-center gap-lg-5 gap-4'
        >
            <div className='img-story'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/carpenter-working.jpg`} alt="carpenter" />
            </div>
            <div className='story'>
                <h2>قصتنا</h2>
                <p>
                    تأسست ورشة دياب للنجارة بهدف تقديم منتجات خشبية عالية الجودة تجمع بين الحِرفية التقليدية والتصميم العصري.
                    بخبرة تمتد لسنوات، نعمل على تنفيذ مشاريع متنوعة تشمل الأثاث المنزلي والمكتبي والديكورات الخشبية، مع الحرص على أدق التفاصيل.
                    رؤيتنا أن نكون علامة مميزة في عالم النجارة من خلال الجودة، الإبداع، والالتزام مع عملائنا.
                </p>
            </div>
        </section>
    );
}