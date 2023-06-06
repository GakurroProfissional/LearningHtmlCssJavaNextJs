import Link from "next/link";



export default function Footer() {
  return (

    <section className="footerPosition" >
      <div className="gridFooter">

      <div className="box1">
          <p>
            <Link href="/" className="titleFooter underline">
              V.R.A.
            </Link>
          </p>
        </div>


        <div>
          <p>
            <Link href="/">
              Home
            </Link>
          </p>
        </div>

        <div>
          <p>
            <Link href="/formacao">
              Formação
            </Link>
          </p>
        </div>

        <div>
          <p>
            <Link href="/certificados">
              Certificados
            </Link>
          </p>
        </div>

        <div>
          <p>
            <Link href="/contato">
              Contato
            </Link>
          </p>
        </div>

        <div>
          <p>
            <Link href="/habilidades">
              Habilidades
            </Link>
          </p>
        </div>

        <div>
          <p>
            <Link href="/about">
              Sobre
            </Link>
          </p>
        </div>



      </div>

    </section>

  )
}
