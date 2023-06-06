import Image from "next/image";
import SpacingLarge from "../spacingLarge/page";

export default function Certificados() {
  return (

    <>
      <section className="bodySection">
        <Image
          src='/images/imgBkWhtGeo.svg'
          alt="backg"
          className="bgSection"
          fill
        />

        <h2>
          Certificados:
        </h2>

        <h4 className="padding5">
          Algoritimo - (Conclusão 04/2023)
        </h4>

        <div className="hoverCertAlg">
          <Image
            src="/images/ViniciusRodriguesAlgoritmo40HorasCertificadoCursoemVideo.pdf.png"
            alt="certificado-algoritimo"
            width={390}
            height={225}
            className="shadowBox"

          />
        </div>
      </section>

      <SpacingLarge />

      <section className="bodySection">


        <Image
          src='/images/imgBkWhtGeo.svg'
          alt="backg"
          className="bgSection"
          fill
        />

        <h4 className="padding5">
          Curso de Java Script e TypeScript do Básico ao Avançado - (Conclusão 05/2023)
        </h4>

        <div className="hoverCertAlg">

          <Image
            src="/images/ViniciusRodriguesCursoJavaScriptETypeScriptdoBásicoAoAvançado146hrs.pdf.png"
            alt="certificado-algoritimo"
            className="shadowBox"
            width={400}
            height={295}
          />

        </div>
      </section>
    </>
  )
}
