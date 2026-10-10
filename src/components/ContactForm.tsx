"use client";
export default function ContactForm() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("لطفا از طریق لینک تلگرام تماس بگیرید. با تشکر.");
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col text-gray-700"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col mb-3">
          <label htmlFor="name" className="m-2 text-lg sm:text-2xl">
            نام و نام خانوادگی
          </label>
          <input
            id="name"
            type="text"
            name="name"
            defaultValue=""
            className="p-2 outline-1 text-lg sm:text-2xl outline-blue-400 rounded md:w-1/2 mx-2"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="m-2 text-lg sm:text-2xl">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            name="name"
            defaultValue=""
            className="p-2 outline-1 outline-blue-400 rounded md:w-1/2 mx-2"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="mobile" className="m-2 text-lg sm:text-2xl">
            موبایل
          </label>
          <input
            id="mobile"
            type="text"
            name="name"
            defaultValue=""
            className="p-2 outline-1 outline-blue-400 rounded md:w-1/2 mx-2"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="mobile" className="m-2 text-lg sm:text-2xl">
            متن شما
          </label>
          <textarea
            id="message"
            name="message"
            defaultValue=""
            className="p-2 outline-1 outline-blue-400 rounded mx-2"
            rows={7}
          />
        </div>
        <div className="flex flex-col mb-3 md:w-1/3 my-6 mr-2">
          <button
            type="submit"
            className="bg-blue-600 px-6 py-3 hover:bg-blue-700 text-lg sm:text-2xl text-white text-center rounded-lg"
          >
            ارسال پیام
          </button>
        </div>
      </form>
    </>
  );
}
