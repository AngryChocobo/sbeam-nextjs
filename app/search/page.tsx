import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Saerch() {
  return (
    <main className="flex-1 bg-[#1b2838]  ">
      <section className="m-auto  flex max-w-screen-md flex-col items-center  justify-between py-8 ">
        <div className="mx-auto w-full max-w-2xl   px-4 lg:max-w-7xl lg:px-8">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="bg-[#223a4c]" placeholder="keyword" />
            <Button className="bg-[#223a4c] " type="submit">
              Search
            </Button>
          </div>

          <div className="mt-6 w-full">
            {games.map((product) => (
              <div
                key={product.sid}
                className="group relative mb-3 flex w-full bg-[#16202d] hover:bg-[#101822]"
              >
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-[120px] overflow-hidden  bg-gray-200 shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover  object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div className="ml-2 w-1/2">
                    <h3 className="mb-1 text-nowrap text-gray-700">
                      <a className="font-semibold dark:text-white">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <GitHubLogoIcon />
                  </div>
                  <p> {product.published_store}</p>
                  <span className="mr-4  inline-block  bg-[#4c6b22] px-1 font-bold text-[#BEEE11] ">
                    -{product.discount ?? 50}%
                  </span>
                  <div className="flex flex-col pr-2 text-lg font-medium text-white">
                    <span className=" text-gray-400 line-through">
                      ${product.full_price}
                    </span>
                    <span className="text-[#BEEE11]">
                      ${product.current_price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const games = [
  {
    sid: 10,
    store_url: "https://store.steampowered.com/app/10",
    store_promo_url: "https://www.youtube.com/watch?v=oKC9SAF4JAc",
    store_uscore: 97,
    published_store: "2000-11-01",
    published_meta: "2000-11-08",
    published_stsp: "2000-11-01",
    published_hltb: "1999-06-12",
    published_igdb: "1999-06-12",
    image: "https://steamcdn-a.akamaihd.net/steam/apps/10/header.jpg",
    name: "Counter-Strike",
    description:
      "Play the world's number 1 online action game. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your team's success. Your team's success affects your role.",
    full_price: 999,
    current_price: 999,
    discount: null,
    platforms: "WIN,MAC,LNX",
    developers: "Valve",
    publishers: "Valve",
    languages:
      "English,French,German,Italian,Spanish - Spain,Simplified Chinese,Traditional Chinese,Korean",
    voiceovers:
      "English,French,German,Italian,Spanish - Spain,Simplified Chinese,Traditional Chinese,Korean",
    categories:
      "Multi-player,PvP,Online PvP,Shared/Split Screen PvP,Valve Anti-Cheat enabled",
    genres: "Action",
    tags: "Action,FPS,Multiplayer,Shooter,Classic,Team-Based,First-Person,Competitive,Tactical,1990's,e-sports,PvP,Military,Strategy,Score Attack,Survival,Assassin,1980s,Ninja,Tower Defense",
    achievements: null,
    gfq_url:
      "https://gamefaqs.gamespot.com/pc/429818-counter-strike?ftag=MCD-06-10aaa1f",
    gfq_difficulty: "Just Right-Tough",
    gfq_difficulty_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=diff&amp;dlc=1&amp;page=33&amp;game_id=429818&amp;min_votes=2#1656"><b>#1656</b></a> hardest PC action game (<a href="/games/rankings?platform=19&amp;list_type=diff&amp;dlc=1&amp;page=111&amp;game_id=429818&amp;min_votes=2#5600"><b>#5600</b></a> on PC, <b>#22929</b> overall)',
    gfq_rating: 3.9,
    gfq_rating_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=rate&amp;dlc=1&amp;page=21&amp;game_id=429818&amp;min_votes=2#1079"><b>#1079</b></a> highest rated PC action game (<a href="/games/rankings?platform=19&amp;list_type=rate&amp;dlc=1&amp;page=121&amp;game_id=429818&amp;min_votes=2#6055"><b>#6055</b></a> on PC, <b>#18721</b> overall)',
    gfq_length: 64.5,
    gfq_length_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=time&amp;dlc=1&amp;game_id=429818&amp;min_votes=2#46"><b>#46</b></a> longest PC action game (<a href="/games/rankings?platform=19&amp;list_type=time&amp;dlc=1&amp;page=15&amp;game_id=429818&amp;min_votes=2#773"><b>#773</b></a> on PC, <b>#2305</b> overall)',
    stsp_owners: 15000000,
    stsp_mdntime: 200,
    hltb_url: "https://howlongtobeat.com/game?id=1953",
    hltb_single: null,
    hltb_complete: null,
    meta_url:
      "https://www.metacritic.com/game/pc/counter-strike?ftag=MCD-06-10aaa1f",
    meta_score: 88,
    meta_uscore: 92,
    grnk_score: null,
    igdb_url: "https://www.igdb.com/games/counter-strike",
    igdb_single: null,
    igdb_complete: null,
    igdb_score: 70,
    igdb_uscore: 83,
    igdb_popularity: 25.74,
  },
  {
    sid: 20,
    store_url: "https://store.steampowered.com/app/20",
    store_promo_url: null,
    store_uscore: 84,
    published_store: "1999-04-01",
    published_meta: "1999-04-07",
    published_stsp: "1999-04-01",
    published_hltb: "1999-04-07",
    published_igdb: "1999-04-07",
    image: "https://steamcdn-a.akamaihd.net/steam/apps/20/header.jpg",
    name: "Team Fortress Classic",
    description:
      "One of the most popular online action games of all time, Team Fortress Classic features over nine character classes -- from Medic to Spy to Demolition Man -- enlisted in a unique style of online team warfare. Each character class possesses unique weapons, items, and abilities, as teams compete online in a variety of game play modes.",
    full_price: 499,
    current_price: 499,
    discount: null,
    platforms: "WIN,MAC,LNX",
    developers: "Valve",
    publishers: "Valve",
    languages:
      "English,French,German,Italian,Spanish - Spain,Korean,Russian,Simplified Chinese,Traditional Chinese",
    voiceovers: null,
    categories:
      "Multi-player,PvP,Online PvP,Shared/Split Screen PvP,Valve Anti-Cheat enabled,Remote Play Together",
    genres: "Action",
    tags: "Action,FPS,Multiplayer,Classic,Shooter,Class-Based,Team-Based,First-Person,1990's,Co-op,Competitive,Fast-Paced,Online Co-Op,Remake,Retro,Mod,Funny,Adventure,Story Rich,Casual",
    achievements: null,
    gfq_url: "https://gamefaqs.gamespot.com/pc/562917-team-fortress-classic",
    gfq_difficulty: "Just Right-Tough",
    gfq_difficulty_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=diff&amp;dlc=1&amp;page=37&amp;game_id=562917&amp;min_votes=2#1869"><b>#1869</b></a> hardest PC action game (<a href="/games/rankings?platform=19&amp;list_type=diff&amp;dlc=1&amp;page=128&amp;game_id=562917&amp;min_votes=2#6422"><b>#6422</b></a> on PC, <b>#26239</b> overall)',
    gfq_rating: 3.47,
    gfq_rating_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=rate&amp;view_type=1&amp;dlc=1&amp;page=35&amp;game_id=562917&amp;min_votes=2#1799"><b>#1799</b></a> lowest rated PC action game (<a href="/games/rankings?platform=19&amp;list_type=rate&amp;view_type=1&amp;dlc=1&amp;page=148&amp;game_id=562917&amp;min_votes=2#7435"><b>#7435</b></a> on PC, <b>#30579</b> overall)',
    gfq_length: 50.6,
    gfq_length_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=time&amp;dlc=1&amp;page=2&amp;game_id=562917&amp;min_votes=2#127"><b>#127</b></a> longest PC action game (<a href="/games/rankings?platform=19&amp;list_type=time&amp;dlc=1&amp;page=30&amp;game_id=562917&amp;min_votes=2#1501"><b>#1501</b></a> on PC, <b>#4994</b> overall)',
    stsp_owners: 3500000,
    stsp_mdntime: 20,
    hltb_url: "https://howlongtobeat.com/game?id=9634",
    hltb_single: null,
    hltb_complete: null,
    meta_url: "https://www.metacritic.com/game/pc/team-fortress-classic",
    meta_score: null,
    meta_uscore: 71,
    grnk_score: null,
    igdb_url: "https://www.igdb.com/games/team-fortress-classic",
    igdb_single: null,
    igdb_complete: null,
    igdb_score: null,
    igdb_uscore: 70,
    igdb_popularity: 1.67,
  },
  {
    sid: 30,
    store_url: "https://store.steampowered.com/app/30",
    store_promo_url: "https://www.youtube.com/watch?v=j4MCo89bTWE",
    store_uscore: 90,
    published_store: "2003-05-01",
    published_meta: "2003-05-06",
    published_stsp: "2003-05-01",
    published_hltb: "2000-08-04",
    published_igdb: "2003-05-01",
    image: "https://steamcdn-a.akamaihd.net/steam/apps/30/header.jpg",
    name: "Day of Defeat",
    description:
      "Enlist in an intense brand of Axis vs. Allied teamplay set in the WWII European Theatre of Operations. Players assume the role of light/assault/heavy infantry, sniper or machine-gunner class, each with a unique arsenal of historical weaponry at their disposal. Missions are based on key historical operations. And, as war rages, players must work together with their squad to accomplish a variety of mission-specific objectives.",
    full_price: 499,
    current_price: 499,
    discount: null,
    platforms: "WIN,MAC,LNX",
    developers: "Valve",
    publishers: "Valve",
    languages: "English,French,German,Italian,Spanish - Spain",
    voiceovers: null,
    categories: "Multi-player,Valve Anti-Cheat enabled",
    genres: "Action",
    tags: "FPS,World War II,Multiplayer,Action,Shooter,War,Team-Based,Classic,Class-Based,First-Person,Historical,Military,Tactical,Co-op,Singleplayer",
    achievements: null,
    gfq_url:
      "https://gamefaqs.gamespot.com/pc/562741-day-of-defeat?ftag=MCD-06-10aaa1f",
    gfq_difficulty: "Just Right-Tough",
    gfq_difficulty_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=diff&amp;dlc=1&amp;page=36&amp;game_id=562741&amp;min_votes=2#1804"><b>#1804</b></a> hardest PC action game (<a href="/games/rankings?platform=19&amp;list_type=diff&amp;dlc=1&amp;page=123&amp;game_id=562741&amp;min_votes=2#6155"><b>#6155</b></a> on PC, <b>#25056</b> overall)',
    gfq_rating: 3.69,
    gfq_rating_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=rate&amp;dlc=1&amp;page=37&amp;game_id=562741&amp;min_votes=2#1872"><b>#1872</b></a> highest rated PC action game (<a href="/games/rankings?platform=19&amp;list_type=rate&amp;dlc=1&amp;page=193&amp;game_id=562741&amp;min_votes=2#9676"><b>#9676</b></a> on PC, <b>#32271</b> overall)',
    gfq_length: 53.1,
    gfq_length_comment:
      '<a href="/games/rankings?platform=19&amp;genre=54&amp;list_type=time&amp;dlc=1&amp;page=2&amp;game_id=562741&amp;min_votes=2#113"><b>#113</b></a> longest PC action game (<a href="/games/rankings?platform=19&amp;list_type=time&amp;dlc=1&amp;page=27&amp;game_id=562741&amp;min_votes=2#1377"><b>#1377</b></a> on PC, <b>#4460</b> overall)',
    stsp_owners: 7500000,
    stsp_mdntime: 28,
    hltb_url: "https://howlongtobeat.com/game?id=2282",
    hltb_single: null,
    hltb_complete: null,
    meta_url:
      "https://www.metacritic.com/game/pc/day-of-defeat?ftag=MCD-06-10aaa1f",
    meta_score: 79,
    meta_uscore: 91,
    grnk_score: null,
    igdb_url: "https://www.igdb.com/games/day-of-defeat",
    igdb_single: null,
    igdb_complete: null,
    igdb_score: 71,
    igdb_uscore: 76,
    igdb_popularity: 1.45,
  },
];
