export default function SectionHeader({header = ""}){
    return(
        <h2 style={{color: "var(--dark-coffee)", fontWeight: "bold"}}>{header}</h2>
    );
}