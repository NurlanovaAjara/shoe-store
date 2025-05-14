import { Clock, Mail, MapPin, Phone } from "lucide-react";
interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "Karakol, Kyrgyzstan",
    icon: (
      <MapPin
        className="h-6 w-6 text-gray-600 group-hover:text-primary
transition-colors"
      />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+996 555 12 34 45",
    icon: (
      <Phone
        className="h-6 w-6 text-gray-600 group-hover:text-primary
transition-colors"
      />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 - 19:00",
    icon: (
      <Clock
        className="h-6 w-6 text-gray-600 group-hover:text-primary
transition-colors"
      />
    ),
  },
  {
    title: "Email Us",
    subtitle: "shoe-store@gmail.com",
    icon: (
      <Mail
        className="h-6 w-6 text-gray-600 group-hover:text-primary
transition-colors"
      />
    ),
  },
];

function FooterTop() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-gray-50 p-4
transition-colors hover-effect"
        >
          {item?.icon}
          <div>
            <h3
              className="font-semibold text-gray-900 group-hover:text-black
hover-effect"
            >
              {item?.title}
            </h3>
            <p
              className="text-gray-600 text-sm mt-1 group-hover:text-gray-900
hover-effect"
            >
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FooterTop;
