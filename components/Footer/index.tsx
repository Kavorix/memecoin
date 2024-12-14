
import { BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";
import { CustomLink } from "../CustomLink"

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className='flex items-center justify-center gap-6'>
        <hr className='w-10 bg-white' />
        <CustomLink href="https://www.linkedin.com/in/sato-daiki-japan/">
          <FaLinkedinIn color='white' />
        </CustomLink>
        <CustomLink href="https://github.com/kavorix">
          <BsGithub color='white' />
        </CustomLink>
        <hr className='w-10 bg-white' />
      </div>
    </div>
  )
}
