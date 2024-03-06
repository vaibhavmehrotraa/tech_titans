import { Button } from "@/components/ui/button";

const LandingPage = () => {
    return ( 
        // <div>Landing Page(Unprotected)</div>
        <div>
            <a href="/sign-in">
                <Button>
                    login
                </Button>
            </a>
            <a href="/sign-up">
                <Button>
                    register
                </Button>

            </a>
        </div>
     );
}
 
export default LandingPage;