import background from '../images/background.jpeg';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const Header = () => {

    return (
        // create the main hero section
        <section className="relative bg-gray-100" style={{ backgroundImage: `url(${background})` }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    <div className="mx-auto text-center pb-12 md:pb-10 pt-10 bg-white items-center rounded-md">
                        <h1 className="h1">
                            The all-in-one platform to grow your business
                        </h1>
                        <div className='flex max-w-3xl mx-auto mt-6'>
                            <Input size="" label="Name" className='mr-2' />
                            <Button className="w-40" fullWidth>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;