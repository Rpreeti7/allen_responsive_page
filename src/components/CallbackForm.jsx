import { section } from "framer-motion/client"

const CallbackForm =() =>
{
    return(
        <section className="bg-blue-50 py-12 px-4 md: px-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-700">
                 Get a free Callback   
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                    type="text"
                    placeholder="Full Name*"
                    required
                    className="border px-4 py-2 rounded-md" 
                    />
                     <select className="border px-4 py-2 rounded-md" required>
                    <option value="">Select Goal</option>
                    <option value="neet">NEET</option>
                    <option value="jee">JEE</option>
                    <option value="foundation">Foundation</option>
                    </select>
                    <select className="border px-4 py-2 rounded-md" required>
                        <option value="">Select Class*</option>

                        <option value="12">Class 12</option>
                        <option value="repeat">Repeater</option>

                    </select>
                    <input 
                    type="text"
                    placeholder="Your State*"
                    required
                    className="border px-4 py-2 rounded-md"
                    />
                    <select className="border px-4 py-2 rounded-md" required>
                        <option value="">Preferred Mode*</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                    <div className="md:col-span-2">
                        <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                            Get Callback
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default CallbackForm;