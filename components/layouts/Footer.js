import Link from "next/link";

export default function Footer () {
    return (
       <div className="container">
           <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
               <p className="col-md-6 col-12 mb-0 text-muted">© 2022 Geesa.am Բոլոր իրավունքները պաշտպանված են</p>
               <ul className="nav col-md-6 col-12 justify-content-end">
                   <li className="nav-item">  <Link href={'/about'}>
                       <a className="nav-link px-2 text-muted">ՄԵՐ ՄԱՍԻՆ</a>
                   </Link></li>
                   <li className="nav-item"><Link href={'/works'}>
                       <a className="nav-link px-2 text-muted">ԱՇԽԱՏԱՆՔՆԵՐ</a>
                   </Link></li>
                   <li className="nav-item"> <Link href={'/services'}>
                       <a className="nav-link px-2 text-muted">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</a>
                   </Link></li>
                   <li className="nav-item"> <Link href={'partners'}>
                       <a  className="nav-link px-2 text-muted">ԳՈՐԾԸՆԿԵՐՆԵՐ</a>
                   </Link></li>
                   <li className="nav-item"> <Link href={'contact'}>
                       <a className="nav-link px-2 text-muted">ԿԱՊ</a>
                   </Link></li>
               </ul>
           </footer>
       </div>
    )
}