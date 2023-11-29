import IconLogotipoSimple from "./icons/IconLogotipoSimple"

const Footer = () => {
    return (
        //container general
        <div className="bg-gray-900 shadow-md relative mx-auto pt-1 md:pt-4 pb-0 md:py-2 md:pb-4 bottom-0 w-full left-0">


        <footer className="bg-gray-900 pb-2 justify-center  items-center  text-white container  mx-auto flex flex-col md:flex-row">

            {/*div con 2 elem: navbar y logo*/}
            <div className="flex md:flex-row flex-col container items-center justify-between  mx-auto max-w-screen-2xl py-2">

                {/*div con logos*/}
                <div className=" flex justify-between gap-4 mb-1 md:mb-0">
                <ion-icon name={"logo-instagram"} size="large"></ion-icon>
                <ion-icon name="logo-facebook" size="large"></ion-icon>
                <ion-icon name="logo-twitter" size="large"></ion-icon>
                <ion-icon name="logo-twitch" size="large"></ion-icon>

                    {/*div con img logo*/}
                    <div className="flex m-auto md:m-0 md:ml-auto">
                        <div className=" my-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300"><IconLogotipoSimple ancho={40} alto={28} /></div>
                    </div>
                </div>



                </div>
        

            {/**disclamer */}
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Funko Todos los derechos reservados.</p>
            </div>

        </footer>
        </div>
    )
}

export default Footer;