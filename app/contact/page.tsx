import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="Contact Us"
        subTitle="Lorem ipsum dolor sit amet."
      />

      <div className="max-w-screen mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-lg text-gray-500 mb-3">Contatact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-700 mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              nemo vero, magnam earum mollitia exercitationem.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 shadow-sm p-3 rounded-sm">
                  <IoMailOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h1 className="tex-lg font-semibold mb-1">Email: </h1>
                  <p>email-us@example.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 shadow-sm p-3 rounded-sm">
                  <IoCallOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h1 className="tex-lg font-semibold mb-1">Phone Number: </h1>
                  <p>+62 876 8897 6755, +62 856 9989 3454</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 shadow-sm p-3 rounded-sm">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h1 className="tex-lg font-semibold mb-1">Address : </h1>
                  <p>Coderx Street Road 2025, PDG, INDONESIA</p>
                </div>
              </li>
            </ul>
          </div>

          {/* contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
