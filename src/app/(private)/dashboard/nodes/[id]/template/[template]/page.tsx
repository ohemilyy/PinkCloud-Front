import {redirect} from "next/navigation";
import {TemplateDetails} from "./details";

export default async function TemplatesPage() {
    // const {userId} = auth();

    // if (!userId) {
    //     redirect("/");
    // }

    // const user = await clerkClient.users.getUser(userId);

    return (
        <div className="px-6 md:px-12">
            {/* user && */(
                <>
                    <TemplateDetails></TemplateDetails>
                </>
            )}
        </div>
    );
}
