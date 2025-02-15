import { AiWebBrowsingIcon, GithubIcon } from "../common/icons";
import { IconBrandTelegram } from "@tabler/icons-react";

export default () => {
    return (
        <footer className="mt-8 border-border/40 border-t">
            <div className="container mx-auto flex items-center justify-between gap-4 p-4">
                <p className="text-muted-foreground text-xs">
                    Developed by <span className="font-medium text-foreground">Mehdi Marzban</span>
                </p>
                <div className="flex items-center gap-6">
                    <a target="_blank" rel="noreferrer" href="https://github.com/MehhdiMarzban">
                        <GithubIcon className="size-5 text-foreground" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://t.me/mehhdi_marzban">
                        <IconBrandTelegram className="size-5 text-foreground" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://mehdi-marzban.ir">
                        <AiWebBrowsingIcon className="size-5 text-foreground" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
