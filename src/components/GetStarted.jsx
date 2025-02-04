import styles from "../style"
import { arrowUp } from "../assets"



const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} rounded-full bg-primary w-[100%] h-[100%]`}>
        <div className={`${styles.flexStart} flex-row items-center justify-center`}>
          <p className="font-[Poppins] font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrowUP" className="w-[23px] h-[23px] object-contain" />
          
        </div>

        <p className="font-[Poppins] font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted