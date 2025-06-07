import { FaMoon, FaSun } from "react-icons/fa6";
import { useRouteLoaderData, useSubmit } from "react-router";

import type { loader } from "~/root";
import Button from "~/components/Button";

function MainThemeSwitch() {
  const loaderData = useRouteLoaderData<typeof loader>("root");
  const theme = loaderData?.theme ?? "dark";

  const submit = useSubmit();

  const pressHandler = () => {
    submit(JSON.stringify({ theme: theme === "dark" ? "light" : "dark" }), {
      navigate: false,
      action: "/api/theme",
      encType: "application/json",
      method: "POST",
    });
  };

  return (
    <Button
      variant="none"
      onPress={pressHandler}
      className="p-3 bg-base rounded-full text-overlay-1">
      {theme === "dark" && <FaSun size={16} />}
      {theme === "light" && <FaMoon size={16} />}
    </Button>
  );
}

export default MainThemeSwitch;
