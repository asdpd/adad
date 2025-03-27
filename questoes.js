const questions = [

    {
        question: "Qual é a principal função do Bombeiro Civil?",
        options: [
            "Realizar manutenção de equipamentos elétricos.",
            "Prestar serviços de segurança em eventos públicos e privados.",
            "Combater incêndios apenas em áreas rurais.",
            "Proteger a segurança do trânsito nas rodovias."
        ],
        answer: 1
    },
    {
        question: "O que o Bombeiro Civil deve fazer quando identificar um incêndio em um edifício?",
        options: [
            "Esperar até que o Corpo de Bombeiros chegue.",
            "Abandonar o local por ser perigoso.",
            "Iniciar o combate ao incêndio com extintores, se possível, e acionar os Bombeiros.",
            "Informar apenas os responsáveis pela segurança do local."
        ],
        answer: 2
    },
    {
        question: "Qual é a legislação que regula a atuação do Bombeiro Civil no Brasil?",
        options: [
            "Lei nº 11.901, de 2008.",
            "Lei nº 11.901, de 2009.",
            "Lei nº 12.901, de 2009.",
            "Lei nº 11.801, de 2006."
        ],
        answer: 1
    },
    {
        question: "Qual equipamento é utilizado pelo Bombeiro Civil para combater incêndios iniciais?",
        options: [
            "Cinto de segurança e Extintor de incêndio.",
            "Extintor de incêndio.",
            "Extintor de incêndio e Chamar povo para próximo.",
            "Botas impermeáveis e Extintor de incêndio."
        ],
        answer: 1
    },
    {
        question: "Qual é a principal característica do Bombeiro Civil?",
        options: [
            "Ser exclusivamente responsável por atividades de resgate.",
            "Trabalhar de forma voluntária, sem receber remuneração.",
            "Prestar serviços preventivos e de primeiros socorros, além de combate a incêndios.",
            "Realizar treinamentos e combater a incêndios."
        ],
        answer: 2
    },
    {
        question: "O que é o treinamento de 'resgate em altura' para um Bombeiro Civil?",
        options: [
            "Socorrer vítimas em locais elevados e Treinamento de primeiros socorros para situações de queda.",
            "Treinamento para socorrer vítimas em locais elevados, como prédios.",
            "Treinamento para atuar somente em incêndios em prédios baixos.",
            "Socorrer vítimas em locais elevados e Treinamento de segurança no trânsito."
        ],
        answer: 1
    },
    {
        question: "Em um incêndio, qual é a primeira ação do Bombeiro Civil?",
        options: [
            "Evacuar todas as pessoas do local e Contatar a mídia para divulgação.",
            "Evacuar todas as pessoas do local com segurança.",
            "Prestar socorro às vítimas em estado grave e Evacuar todas as pessoas do local.",
            "Evacuar todas as pessoas do local e Aguardar o Corpo de Bombeiros para iniciar o combate."
        ],
        answer: 1
    },
    {
        question: "O que significa 'Plano de Emergência' em relação ao trabalho de um Bombeiro Civil?",
        options: [
            "Um documento apenas para os gestores do local.",
            "Um procedimento que o Bombeiro Civil deve seguir em qualquer situação de emergência.",
            "Uma lista de pessoas que devem ser avisadas em caso de incêndio.",
            "Um conjunto de normas de segurança que não se aplica ao Bombeiro Civil."
        ],
        answer: 1
    },
    {
        question: "Como o Bombeiro Civil deve agir durante um evento com grande público e risco de incêndio?",
        options: [
            "Manter-se afastado do público para não ser confundido com um visitante.",
            "Monitorar constantemente as saídas de emergência e garantir que não sejam obstruídas.",
            "Evitar qualquer tipo de alerta, para não causar pânico.",
            "Deixar a responsabilidade apenas para a brigada de incêndio do local."
        ],
        answer: 1
    },
    {
        question: "Em que situações o Bombeiro Civil pode usar um cilindro de oxigênio?",
        options: [
            "Quando uma pessoa estiver passando mal devido a calor extremo.",
            "Para aumentar a pressão do extintor de incêndio.",
            "Quando houver uma emergência médica, como dificuldades respiratórias, após avaliação da situação.",
            "Quando o local estiver com fumaça densa e não houver outras alternativas."
        ],
        answer: 2
    },
    {
        question: "Qual a principal diferença entre um Bombeiro Civil e um Bombeiro Militar?",
        options: [
            "O Bombeiro Civil atua exclusivamente em hospitais.",
            "O Bombeiro Militar é um militar e atua principalmente em casos de emergência pública, enquanto o Bombeiro Civil trabalha em empresas e eventos privados.",
            "O Bombeiro Civil só pode atuar em áreas rurais, enquanto o Bombeiro Militar atua em áreas urbanas.",
            "Não há diferença, ambos atuam da mesma maneira."
        ],
        answer: 1
    },
    {
        question: "Em caso de uma vítima em parada cardiorrespiratória (PCR), o que o Bombeiro Civil deve fazer?",
        options: [
            "Apenas esperar a chegada de um médico.",
            "Realizar a reanimação cardiopulmonar (RCP) imediatamente, se necessário.",
            "Aplicar medicamentos específicos para parar a PCR.",
            "Apenas evacuar a vítima para uma ambulância."
        ],
        answer: 1
    },
    {
        question: "Qual é a principal medida de prevenção para incêndios em ambientes com grande quantidade de material inflamável?",
        options: [
            "Manter extintores sempre ao alcance, mas sem inspeções periódicas.",
            "Treinar a equipe apenas em combate ao incêndio, sem medidas preventivas.",
            "Garantir que o local esteja sempre limpo, sem acumulação de materiais combustíveis, e realizar inspeções periódicas.",
            "Instalar alarmes de incêndio, mas não é necessário treinamento."
        ],
        answer: 2
    },
    {
        question: "O que é necessário para o Bombeiro Civil realizar o transporte de uma vítima em um acidente?",
        options: [
            "Usar técnicas adequadas e apenas carregar a vítima nos ombros.",
            "Transportar a vítima sem considerar o tipo de lesão que ela pode ter.",
            "Usar técnicas adequadas de imobilização e cuidado, garantindo que a vítima não agrave lesões.",
            "Usar técnicas adequadas e levar a vítima o mais rápido possível, sem se preocupar com os procedimentos corretos."
        ],
        answer: 2
    },
    {
        question: "Em uma situação de resgate em um incêndio, qual deve ser a prioridade do Bombeiro Civil?",
        options: [
            "Não resgatar objetos valiosos primeiro.",
            "Resgatar as pessoas com risco iminente de vida e garantir a evacuação segura.",
            "Ficar dentro do local queimado para controlar o fogo.",
            "Aguardar a chegada do Corpo de Bombeiros e não iniciar qualquer ação."
        ],
        answer: 1
    },
    {
        question: "Qual é a melhor maneira de evacuar um prédio durante um incêndio?",
        options: [
            "Usar as escadas, sem pressa, e deixar as pessoas mais frágeis para trás.",
            "Utilizar as saídas de emergência com calma, seguindo os planos de evacuação e guiando todos para um local seguro.",
            "Evacuar rapidamente, sem prestar atenção na ordem de pessoas.",
            "Esperar o Corpo de Bombeiros para evacuar o local."
        ],
        answer: 1
    },
    {
        question: "O que deve ser feito antes de utilizar um extintor de incêndio?",
        options: [
            "Aguardar que o incêndio se alastre para ter certeza de que o extintor será necessário.",
            "Verificar o tipo de fogo e garantir que o extintor é adequado para aquele tipo de incêndio.",
            "Verificar o tipo de fogo e não garantir que o extintor é adequado para aquele tipo de incêndio.",
            "Somente verificar se o extintor está cheio, sem classificar o tipo de fogo."
        ],
        answer: 1
    },
    {
        question: "Quando um Bombeiro Civil deve usar os Equipamentos de Proteção Individual (EPIs)?",
        options: [
            "Somente quando estiver realizando tarefas de combate a incêndio.",
            "Sempre que estiver realizando atividades que envolvem risco de acidente, como resgates e incêndios.",
            "Com resgates e incêndios e apenas quando for solicitado por um superior.",
            "Só quando for em atividades externas e com resgates e incêndios."
        ],
        answer: 1
    },
    {
        question: "Em relação ao uso de extintores de incêndio, o que o Bombeiro Civil deve sempre verificar antes de utilizá-los?",
        options: [
            "Se o extintor está cheio e se o tipo de agente extintor é adequado para o tipo de fogo.",
            "Se o extintor possui um alarme sonoro para indicar que está em uso.",
            "Se o extintor tem mais de 10 anos de validade, para garantir que a situação é controlável.",
            "Se o extintor não está cheio e se o tipo de agente extintor é adequado para o tipo de fogo."
        ],
        answer: 0
    },
    {
        question: "O que é necessário para um Bombeiro Civil estar apto a realizar o trabalho de combate a incêndios em empresas?",
        options: [
            "Apenas realizar um curso de primeiros socorros.",
            "Certificar-se de que possui treinamento específico em combate a incêndio, uso de extintores e noções de segurança.",
            "Apenas ter certificado.",
            "Ter apenas experiência prática, sem a necessidade de cursos formais."
        ],
        answer: 1
    },
    {
        question: "O que deve ser feito caso o Bombeiro Civil se depare com uma vítima inconsciente em um incêndio?",
        options: [
            "Imediatamente verificar as vias respiratórias e aguardar que a vítima se recupere sozinha.",
            "Imediatamente verificar as vias respiratórias e, se necessário, iniciar a reanimação cardiopulmonar (RCP).",
            "Deixar a vítima onde está e esperar que o Corpo de Bombeiros chegue.",
            "Imediatamente verificar as vias respiratórias e colocar a vítima de pé para 'acordar' rapidamente."
        ],
        answer: 1
    },
    {
        question: "Durante um incêndio, qual é a forma mais segura de utilizar uma mangueira de combate a incêndio?",
        options: [
            "Direcionar a água para o teto para garantir que o fogo não se espalhe.",
            "Direcionar o jato de água diretamente para as chamas, controlando o fluxo para evitar desperdício.",
            "Usar a mangueira somente quando as chamas já estiverem totalmente fora de controle.",
            "Apenas observar a evolução do fogo sem usar a mangueira."
        ],
        answer: 1
    },
    {
        question: "O que deve ser feito se o Bombeiro Civil encontrar uma vítima com queimaduras graves em um incêndio?",
        options: [
            "Acalmar a vítima e deixá-la sozinha até que a dor passe.",
            "Aplicar água fria diretamente sobre as queimaduras e aguardar que a ajuda médica chegue.",
            "Remover a vítima da área do incêndio, cobri-la com pano limpo e buscar auxílio médico imediatamente.",
            "Tentar aplicar qualquer tipo de pomada ou creme sobre a queimadura."
        ],
        answer: 2
    },
    {
        question: "Qual dos elementos abaixo NÃO faz parte do tetraedro do fogo?",
        options: [
            "Combustível",
            "Combutente",
            "Comburente",
            "Reação em cadeia"
        ],
        answer: 2
    },
    {
        question: "No processo de combustão, a pirólise é definida como:",
        options: [
            "A reação química entre combustível e comburente que gera luz e calor.",
            "A decomposição térmica do material combustível antes da ignição.",
            "A liberação de gases inflamáveis durante o resfriamento do incêndio.",
            "A extinção do fogo pela falta de oxigênio."
        ],
        answer: 1
    },
    {
        question: "Qual método de extinção do fogo baseia-se na remoção do calor da reação?",
        options: [
            "Abafamento e Resfriamento",
            "Resfriamento",
            "Retirada do material",
            "Quebra da reação em cadeia"
        ],
        answer: 1
    },
    {
        question: "O fenômeno do backdraft ocorre quando:",
        options: [
            "Há um acúmulo de calor que faz todos os materiais combustíveis atingirem a ignição ao mesmo tempo.",
            "A fumaça encontra uma fonte de calor e se inflama instantaneamente.",
            "Um ambiente fechado, com pouco oxigênio e gases quentes acumulados, recebe uma entrada súbita de ar.",
            "Um incêndio é extinto por falta de combustível e calor."
        ],
        answer: 2
    },
    {
        question: "Segundo a classificação dos incêndios, qual classe envolve a queima de líquidos inflamáveis, como gasolina e álcool?",
        options: [
            "Classe B e C",
            "Classe B",
            "Classe C",
            "Classe D"
        ],
        answer: 1
    },
    {
        question: "Qual é a definição correta de incêndio?",
        options: [
            "Qualquer fogo utilizado para aquecimento ou iluminação.",
            "O fogo que foge do controle do homem, causando danos.",
            "A combustão espontânea de qualquer material inflamável.",
            "A chama resultante de qualquer reação química com liberação de calor."
        ],
        answer: 1
    },
    {
        question: "Sobre a transferência de calor, o método que ocorre através do contato direto entre moléculas é chamado de:",
        options: [
            "Convecção",
            "Radiação",
            "Condução",
            "Expansão térmica"
        ],
        answer: 2
    },
    
    {
        question: "Qual é a principal característica da combustão incompleta?",
        options: [
            "Produção de dióxido de carbono e água sem resíduos.",
            "Liberação de fumaça, fuligem e monóxido de carbono.",
            "Não gerar calor suficiente para manter a queima.",
            "Queima exclusiva de combustíveis gasosos."
        ],
        answer: 1
    },
    {
        question: "O que significa o termo 'ponto de fulgor' em um líquido inflamável?",
        options: [
            "A temperatura na qual ele começa a ferver.",
            "A temperatura mínima em que libera vapores que inflamam, mas não sustentam a combustão.",
            "O momento em que o combustível sólido começa a decompor-se.",
            "A temperatura em que o líquido atinge a autoignição sem fonte externa de calor."
        ],
        answer: 1
    },
    {
        question: "O que é a 'reação em cadeia' no processo da combustão?",
        options: [
            "A transferência de calor entre materiais combustíveis.",
            "A liberação contínua de energia que mantém a combustão ativa.",
            "A propagação de chamas em incêndios florestais.",
            "O deslocamento de fumaça quente dentro de um ambiente confinado."
        ],
        answer: 1
    },
    {
        question: "A combustão classificada como 'viva' é caracterizada por:",
        options: [
            "Presença de chama e liberação intensa de calor.",
            "Queima lenta e ausência de chamas.",
            "Uma reação que ocorre sem a necessidade de oxigênio.",
            "A extinção rápida da combustão devido à umidade."
        ],
        answer: 0
    },
    {
        question: "Entre os agentes extintores abaixo, qual é o mais indicado para incêndios da Classe C (equipamentos elétricos energizados)?",
        options: [
            "CO₂ e água",
            "Espuma mecânica",
            "Somente Gás carbônico (CO₂)",
            "CO₂ e areia"
        ],
        answer: 2
    },
    {
        question: "Qual das opções abaixo NÃO é uma fase do incêndio?",
        options: [
            "Fase inicial",
            "Fase de crescimento",
            "Fase de combustão espontânea",
            "Fase de extinção"
        ],
        answer: 2
    },
    {
        question: "Qual fenômeno ocorre quando a temperatura ambiente atinge um nível crítico e todos os materiais inflamáveis entram em ignição simultaneamente?",
        options: [
            "Backdraft",
            "Flashover",
            "Autoignição",
            "BLEVE"
        ],
        answer: 1
    },
    {
        question: "O que significa a sigla BLEVE?",
        options: [
            "Explosão causada pela ignição de vapores inflamáveis dispersos no ar.",
            "Combustão espontânea de líquidos inflamáveis dentro de tanques de armazenamento.",
            "Explosão resultante da vaporização de um líquido em ebulição dentro de um recipiente fechado.",
            "Liberação de gases tóxicos provenientes da queima incompleta de materiais plásticos."
        ],
        answer: 2
    }
];
