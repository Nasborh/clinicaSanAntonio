import  LogoI  from "../assets/LogoClinica.png";

export function Logo({ property }: { property: string }) {
    return (
    <img src={LogoI} alt="Logo" className={property}/>
    )
}