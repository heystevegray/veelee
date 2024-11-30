import { Link } from "@remix-run/react";
import { converters } from "~/routes/_index";

const Converters = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {converters.map((converter) => (
        <Link
          key={converter.href}
          to={`/${converter.href}`}
          className="flex flex-col gap-4 justify-center rounded-md bg-card p-8 items-center hover:scale-110 hover:shadow-lg transition-transform"
        >
          <div>{converter.icon}</div>
          <div>{converter.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Converters;
