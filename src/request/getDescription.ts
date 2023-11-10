import { dataDescription } from '../mocks/allTitles';
import { IAllTitles } from '../interfaces/IAllTitles';


type TIdProps = {
    id?: string,
}

export function useDescription({ id }: TIdProps) {
    const description: IAllTitles[] = dataDescription;
    if (!description || !description.length) { return null; }


    const descriptionFind = description.find((item) => item.id === id)
    if (!descriptionFind) { return null; }
    const title = descriptionFind.title;
    const subtitle = descriptionFind.subtitle;

    return { title, subtitle }
}

