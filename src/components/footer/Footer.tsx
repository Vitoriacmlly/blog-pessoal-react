import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse as redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="www.linkedin.com/in/vitoria-camilly" target="_blank">
                        <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/aypipinha/?igsh=MXJoNDg1dDIydTR4MQ%3D%3D#" target="_blank">
                        <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/Vitoriacmlly?tab=repositories" target="_blank">
                        <GithubLogoIcon size={48} weight='bold' />
                        </a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer