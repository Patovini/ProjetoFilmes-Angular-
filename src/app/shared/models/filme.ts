import { CdkTextareaAutosize } from "@angular/cdk/text-field";

export interface Filme {

    id?: number;
    titulo: string;
    urlFoto?: string;
    dtLancamento: number;
    descricao?: string;
    nota: number;
    urlIMDb?: string;
    genero: string;

}

// "id": 1,
//       "titulo": "MIB: Homens de Preto",
//       "urlFoto": "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       "dtLancamento": "1997-07-11T03:00:00.000Z",
//       "descricao": "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.",
//       "nota": 7.3,
//       "urlIMDb": "https://www.imdb.com/title/tt0119654/",
//       "genero": "Ação"