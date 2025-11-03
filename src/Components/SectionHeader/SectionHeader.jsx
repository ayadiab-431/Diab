import './SectionHeader.css';

export default function SectionHeader({header = ""}){
    return(
        <div className={`sec-address mb-5`}>
            <h2 className='section-header'>{header}</h2>
        </div>
    );
}