import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
        <p className="navtitle" onClick={() => window.location.href = "/"}>Hpsk&#39;s website</p>
        <div className="navlinks">
            <Link href="/">Home</Link>  
            <a href="https://icreate.pro">iCreate</a>
        </div>
    </div>
  )
}
