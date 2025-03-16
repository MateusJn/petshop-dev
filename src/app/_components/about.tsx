import Image from "next/image"
import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="relative" data-aos="fade_up_right">

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                    src={about1Img}
                    alt="Foto de um cachorro"
                    fill
                    quality={100}  
                    className="object-cover hover:scale-110 duration-300"
                    priority
                    />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                    <Image
                    src={about2Img}
                    alt="Foto do outro cachorro"
                    fill
                    quality={100}  
                    priority
                    />
                </div>

            </div>

            <div className="space-y-6 mt-10">
                <h2 className="text-3xl font-bold">Sobre</h2>

                <p>
                Nossa petshop oferece tudo o que seu amigo de quatro patas precisa para viver com saúde e felicidade! 
                Com uma vasta gama de produtos de qualidade, como ração, brinquedos, acessórios e itens de higiene, 
                garantimos o bem-estar e conforto do seu pet. 
                Além disso, contamos com uma equipe especializada pronta para oferecer serviços personalizados, 
                como banho e tosa, consultas veterinárias e muito mais. 
                Venha nos visitar e descubra como podemos cuidar do seu animalzinho com carinho e dedicação! 
                </p>

                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Aberto desde 2010
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Equipe completa para o atendimento
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Qualidade é o nosso compromisso
                    </li>
                </ul>

            <div className="flex gap-2">
            <a 
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                    <WhatsappLogo className="w-5 h-5 text-white" />
                    Contato via WhatsApp
                </a>

                <a 
                href="#"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                    <MapPin className="w-5 h-5 text-black" />
                    Localização da Loja
                </a>   
            </div>

            </div>


            </div>

            </div>
        </section>
    )
}