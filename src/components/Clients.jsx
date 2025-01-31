import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section id="clients" className={`my-4 ${styles.flexCenter}`}>
      <div className="flex flex-wrap flex-row flex-1 justify-between items-center w-full">
        {clients.map((client) => (
          <div key={client.id} className={`sm:min-w-[192px] min-w-[120px]`}>
            <img className="sm:w-[192px] w-[100px] object-contain" src={client.logo} alt="client" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients