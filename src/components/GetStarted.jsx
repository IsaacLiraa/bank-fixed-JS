import styles from "../style"
import { arrowUp } from "../assets"



const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} rounded-full bg-black w-[100%] h-[100%]`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-[Poppins] font-medium text-[18px] leading-[23px]"><span className="text-gradient">Get</span></p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted