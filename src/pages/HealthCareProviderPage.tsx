import { ComponentType, useEffect, useState } from "react";
import { pokemonApi } from "../apis";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { useAuth0 } from "@auth0/auth0-react";
import LayoutComponentProps from "../types/layout";



interface HealthCareProviderPageProps {
    LayoutComponent: ComponentType<LayoutComponentProps>;
}

const HealthCareProviderPage: React.FC<HealthCareProviderPageProps> = ({ LayoutComponent}) => {

    const [data2, setData] = useState<any>([]);
    const token = useSelector((state: RootState) => state.auth.token);
    const { isAuthenticated } = useAuth0();
    const { data, error, isLoading, refetch } = pokemonApi.endpoints.getPokemonByName.useQuery({ skip: true });

    useEffect(() => {
        if (isAuthenticated && token !== null) { // Only get token if it doesn't exist yet            
            refetch();
            console.log(data);
        }
    }, [isAuthenticated, token]);

    const result = data2.map((item: any) => {
        return <li key={item.id}>{item.title}</li>
    });

    return (<LayoutComponent>
        <h1>Health Care Provider Page</h1>
    </LayoutComponent>)
}

export default HealthCareProviderPage;