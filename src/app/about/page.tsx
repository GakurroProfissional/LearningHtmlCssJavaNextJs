import Image from "next/image";


export default function About() {
  return (
    <>
      <section className="bodySection">
        <div>

          <Image
            src='/images/imgBkWhtGeo.svg'
            alt="backg"
            className="bgSection"
            fill
          />
          <h2>
            Sobre mim:
          </h2>
          <ul>
            <li>Desenvolver novas habilidades e conhecimentos para aplicação eficiente e tempestiva diante de situações
              de risco e/ou tradicionais/eventuais.</li>
            <li>Exercer as atividades com boa-fé, transparência, diligência e lealdade.</li>
            <li>Adotar condutas compatíveis com os princípios da idoneidade moral e profissional. </li>
          </ul>
        </div>
      </section>
    </>
  )
}
