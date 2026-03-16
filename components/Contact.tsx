export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Contact</h3>
          <p className="mb-2 text-slate-600 dark:text-slate-400">Email : morelyann10@gmail.com</p>
          <p className="text-slate-600 dark:text-slate-400">Téléphones : 0143099959 / 0799245071</p>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 outline-none ring-slate-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Votre nom"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 outline-none ring-slate-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              placeholder="votre@email.com"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 outline-none ring-slate-200 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Votre message"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
