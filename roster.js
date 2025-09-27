// Données des influenceurs
const influencers = [
    {
        id: "1",
        name: "Dunia batma",
        handle: "@duniabatma",
        niche: "Lifestyle & Mode",
        followers: "10.4M",
        bio: "Créatrice de contenu lifestyle et mode, passionnée par l’élégance, la mode éthique et le bien-être. Elle inspire sa communauté avec des looks raffinés, des collaborations premium et des conseils tendances adaptés aux nouvelles générations.",
        platforms: [
            { name: "Instagram", handle: "Dunia_batma", followers: "10.4M" },
            { name: "TikTok", handle: "@duniabatma_", followers: "442.8k" },
            { name: "YouTube", handle: "duniabatmaofficial", followers: "264k" },
        ],
        posts: [
            {
                platform: "Instagram",
                description: "Nouvelle collection automne avec @thaher baqer - Engagement record !",
                engagement: "812klikes, 1168 comments"
            },
            {
                platform: "TikTok",
                description: "Get Ready With Me - Tendances 2025",
                engagement: "2.1M vues, 180K likes"
            },
        ]
    },
    {
        id: "2",
        name: "Ibtissam Tiskat",
        handle: "@ibtissamtiskat",
        niche: "Lifestyle & Beauté",
        followers: "7.8M",
        bio: "Ibtissam Tiskat se concentre sur la beauté naturelle, les routines soins et maquillage, et un lifestyle quotidien inspirant. Elle crée du contenu interactif, léger et fun, qui attire particulièrement un public jeune et engagé.",
        platforms: [
            { name: "YouTube", handle: "ibtissamtisk", followers: "675k" },
            { name: "Instagram", handle: "ibtissamtiskatofficiel", followers: "7.8M" },
            { name: "TikTok", handle: "@ibtissamtiskat", followers: "1.5M" },
        ],
        posts: [
            {

                platform: "Instagram",
                description: "Collaboration exclusive avec @beautybrand - Tutoriel maquillage",
                engagement: "500K likes, 9K comments"
            },
            {
                platform: "youTube",
                description: "Live shopping avec @fashionbrand - 150K viewers en simultané",
                engagement: "4M vues,2M likes"
            }
        ]
    },
    {
        id: "3",
        name: "hiba lamane",
        handle: "hibalamane12",
        niche: "Mode & Beauté & voyage",
        followers: "1.9M",
        bio: "Influenceuse marocaine passionnée par la mode, le maquillage et le voyage. Elle partage des looks tendance, des conseils beauté, des destinations inspirantes et des collaborations avec des marques renommées, inspirant sa communauté à adopter un style de vie élégant et cosmopolite.",
        platforms: [
            { name: "Instagram", handle: "Hiba lamane", followers: "1.9M" },
            { name: "TikTok", handle: "@hiba_lamane", followers: "4.2M" },
            { name: "YouTube", handle: "Hiba lamane", followers: "11.5K" }
        ],
        posts: [
            {
                platform: "Instagram",
                description: "🎥 Reel récent – Collaboration avec @makeup__jessy et @meriem_hairstyle",
                engagement: "320K likes, 8.5K comments"
            },
            {
                platform: "TikTok",
                description: " Vidéo tutoriel maquillage avec @blackdiamond.maroc.",
                engagement: "4.2M vues, 250K likes"
            },
            {
                platform: "YouTube",
                description: "Vlog voyage à Bali - Partenariat avec @luxuryresorts",
                engagement: "150K vues, 5K likes"
            },
        ]
    },
    {
        id: "4",
        name: "Jack Morris",
        handle: "@doyoutravel",
        niche: "Voyage & Culture",
        followers: "2.8M",
        bio: "Jack Morris est un influenceur et photographe de voyage mondialement reconnu. Il partage ses aventures dans des destinations magnifiques autour du monde, des plages tropicales aux villes luxueuses. Son contenu visuel inspire ses abonnés à explorer le monde avec un style de vie aventureux et sophistiqué.",
        platforms: [
            { name: "Instagram", handle: "@lucastravel", followers: "2.8M" },
        ],
        posts: [
            {
                platform: "Instagram",
                description: " Conseils de voyage, offres touristiques, collaborations exclusives avec des marques de luxe.",
                engagement: "8M likes, 4M comments"
            },
        ]
    },
    {
        id: "5",
        name: "易梦玲 (Yimoney)",
        handle: "@yimoney",
        niche: "Beauté & Skincare",
        followers: "4.47M",
        bio: "Yimoney est l’une des influenceuses les plus reconnues en Chine dans le domaine de la beauté et des soins de la peau. Elle partage avec ses abonnés des conseils de skincare, des revues de produits et des techniques de maquillage, inspirant sa communauté à adopter des routines beauté efficaces et tendances.",
        platforms: [
            { name: "Instagram", handle: "@yimoney", followers: "1.6M" },
            { name: "Douyin (tiktok chine)", handle: "@yimoneya", followers: "12.6M" },
            { name: "YouTube", handle: "yimoney Beauty", followers: "350K" }
        ],
        posts: [
            {
                platform: "Instagram",
                description: "Nouveau lancement @luxeskincare - Routine révolutionnaire",
                engagement: "420K likes, 11K comments"
            },
            {
                platform: "Douyin (tiktok chine)",
                description: "Transformation makeup en 60 secondes",
                engagement: "4.1M vues, 320K likes"
            }
        ]
    },
    {
        id: "6",
        name: "Sisca Kohl",
        handle: "@siscakohl",
        niche: "Food & Lifestyle",
        followers: "7M",
        bio: "Chef passionné et créateur de contenus culinaires. Partenariats avec restaurants étoilés et marques gastronomiques premium.",
        platforms: [
            { name: "Instagram", handle: "@Sisca kohl", followers: "1.2M" },
            { name: "TikTok", handle: "@Sisca_kohl", followers: "6M" },
            { name: "YouTube", handle: "sisca_kohl", followers: "6M" }
        ],
        posts: [
            {
                platform: "Instagram",
                description: "Collaboration avec restaurant 5 étoiles @michelinstar",
                engagement: "10M likes, 7.8K comments"
            },
            {
                platform: "TikTok",
                description: "Recette en 30 secondes - Viral food trend",
                engagement: "2.8M vues, 195K likes"
            }
        ]
    }
];