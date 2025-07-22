import { FaMoon, FaSun } from "react-icons/fa6";
import { useRouteLoaderData, useSubmit } from "react-router";
import Button from "~/components/Button";
import type { loader } from "~/root";

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
      aria-label="دکمه : تغییر تم سایت"
      variant="none"
      isDisabled={true}
      onPress={pressHandler}
      className="p-3 bg-base rounded-full text-overlay-1"
    >
      {theme === "dark" && <FaSun size={16} aria-hidden="true" />}
      {theme === "light" && <FaMoon size={16} aria-hidden="true" />}
    </Button>
  );
}

export default MainThemeSwitch;
