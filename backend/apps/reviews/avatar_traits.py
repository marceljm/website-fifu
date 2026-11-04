"""Deterministic, fictional portrait descriptions derived from a reviewer's hash."""

from __future__ import annotations

import hashlib
import random
import unicodedata


FEMININE_GIVEN_NAMES = {
    "agnieszka", "aiko", "amelia", "amira", "ananya", "astrid", "beatriz",
    "camila", "carolina", "catalina", "chiara", "charlotte", "chloe", "chloé",
    "daria", "elena", "ella", "emma", "francesca", "freya", "giulia", "grace",
    "greta", "hana", "harriet", "ingrid", "ines", "inès", "isabela", "ivana",
    "juliana", "katarzyna", "layla", "lea", "léa", "leila", "lena", "lily",
    "manon", "margaux", "maren", "mei-ling", "milena", "nadia", "paula", "priya",
    "renata", "rin", "ruby", "sanne", "sofia", "sofía", "soo-min", "sophie",
    "valeria", "valentina", "zara", "zoe", "zoé", "martina",
}

SKIN_TONES = ["fair", "light", "light medium", "olive", "medium", "deep", "very deep"]
EYE_COLORS = ["brown", "hazel", "blue", "green", "gray"]
AGE_RANGES = ["20–29", "30–39", "40–49", "50–59", "60–69"]
NOSE_SHAPES = ["straight", "rounded", "slightly broad", "small"]
HAIR_STYLES_WOMAN = [
    "shoulder-length wavy", "long straight", "curly", "coily", "short bob",
    "short pixie", "long braided", "shoulder-length locs",
]
HAIR_STYLES_MAN = [
    "short textured", "short wavy", "curly", "coily", "close fade",
    "shaved", "shoulder-length wavy", "short locs",
]
HAIR_COLORS = ["black", "dark brown", "brown", "chestnut", "auburn", "blonde", "silver"]
CLOTHING = [
    "a simple navy knit top", "a forest-green button-up shirt", "a rust-colored blouse",
    "a soft blue denim shirt", "a charcoal crew-neck sweater", "a muted teal casual shirt",
    "a burgundy cardigan", "a light neutral linen shirt",
]

CITY_BY_REGION = {
    "Korean": ["Seoul"],
    "Japanese": ["Tokyo", "Osaka"],
    "Chinese or Chinese diaspora": ["Taipei", "Singapore", "Vancouver"],
    "South Asian": ["Mumbai", "Bengaluru", "Dhaka", "Lahore"],
    "West African": ["Accra", "Lagos"],
    "East African": ["Addis Ababa", "Nairobi"],
    "Middle Eastern or North African": ["Beirut", "Amman", "Cairo"],
    "Latin American": ["São Paulo", "Mexico City", "Buenos Aires"],
    "Italian": ["Milan", "Rome", "Bologna"],
    "French": ["Paris", "Lyon", "Marseille"],
    "German-speaking European": ["Berlin", "Hamburg", "Munich"],
    "Nordic": ["Stockholm", "Copenhagen", "Oslo"],
    "Central or Eastern European": ["Warsaw", "Prague", "Budapest"],
    "English-speaking or North American": ["London", "Manchester", "Chicago", "Toronto", "Boston", "Melbourne"],
}

SCENES = [
    ("café", "a neighborhood café with tables and a large window"),
    ("park", "a public park with leafy trees, a walking path, and a bench"),
    ("office", "a practical modern office with desks and large windows"),
    ("street", "a lively pedestrian street with storefronts and a few distant passersby"),
    ("home office", "a lived-in home office with a bookcase, desk, and one green plant"),
    ("coworking space", "a shared coworking space with desks and tall windows"),
    ("garden", "a residential garden patio with a fence and potted plants"),
    ("library", "a quiet library reading area with tall bookshelves"),
    ("restaurant patio", "a small restaurant patio on an ordinary city street"),
    ("station", "a train station concourse with commuters in the distance"),
    ("bookshop", "an independent neighborhood bookshop with shelves of books"),
    ("bakery", "a local bakery café with a counter and warm display lights"),
    ("market", "a covered neighborhood market with produce stalls in the distance"),
    ("public square", "a pedestrian city square with benches and leafy planters"),
]

REGION_RULES = {
    "Korean": {"family": {"kim", "park", "lee", "choi", "jung"}, "given": {"hyun", "soo-min"}},
    "Japanese": {"family": {"sato", "tanaka", "nakamura", "kobayashi", "takahashi"}, "given": {"haruki", "haruto", "kenji", "aiko"}},
    "Chinese or Chinese diaspora": {"family": {"chen", "lin", "wong", "wei", "zhang", "liu"}, "given": {"mei-ling", "wei", "minh"}},
    "South Asian": {"family": {"sharma", "mehta", "iyer", "chowdhury", "rahman", "malik"}, "given": {"priya", "ananya", "dev", "rohan", "layla"}},
    "West African": {"family": {"adebayo", "mensah", "okafor"}, "given": {"kofi"}},
    "East African": {"family": {"abebe"}, "given": set()},
    "Middle Eastern or North African": {"family": {"haddad", "khalil", "nasser"}, "given": {"tariq"}},
    "Latin American": {"family": {"reyes", "molina", "salazar", "mendoza", "carvalho", "ribeiro", "almeida", "duarte", "castillo", "navarro", "quintana", "pereira", "cordeiro", "moreira", "esteves", "herrera", "delgado", "guerrero", "ramos"}, "given": {"andrés", "mateo", "tomás", "sofía", "camila", "santiago", "vicente", "joaquín", "nicolás", "alejandro"}},
    "Italian": {"family": {"bianchi", "ricci", "marino", "conti", "rinaldi", "greco", "gallo", "moretti", "colombo", "ferrara", "barbieri"}, "given": {"giulia", "chiara", "matteo", "riccardo", "davide", "alessandro"}},
    "French": {"family": {"perrin", "rousseau", "lambert", "renard", "girard", "marchand", "fontaine", "garnier", "dubois", "chevalier", "lefevre", "lefèvre"}, "given": {"inès", "léa", "manon", "margaux", "théo", "julien", "raphaël"}},
    "German-speaking European": {"family": {"schreiber", "koenig", "könig", "hoffmann", "weber", "fischer"}, "given": {"niklas", "sven", "felix", "elias"}},
    "Nordic": {"family": {"jensen", "holm", "nygaard", "eriksen", "bergström", "bergstrom"}, "given": {"freya", "astrid", "ingrid", "maren"}},
    "Central or Eastern European": {"family": {"novak", "novák", "dvorak", "dvořák", "nowak", "zielinski", "zieliński", "kovács", "kovacs", "sokolov", "sokolova", "volkov", "bartos", "bartoš", "marek", "horák", "horak", "petrova"}, "given": {"agnieszka", "katarzyna", "ivana", "jakub", "petr", "milena", "daria", "dmitri", "bence", "anton"}},
}


def _fold(value: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFKD", value.casefold()) if not unicodedata.combining(c))


def _cultural_background(name: str) -> str:
    parts = [_fold(part) for part in name.split()]
    first, last = parts[0], parts[-1]
    for label, rules in REGION_RULES.items():
        if last in {_fold(x) for x in rules["family"]}:
            return label
    for label, rules in REGION_RULES.items():
        if first in {_fold(x) for x in rules["given"]}:
            return label
    # A name alone cannot reliably distinguish British, American, Australian, or other
    # English-speaking origins, so keep this broad rather than inventing a nationality.
    return "English-speaking or North American"


def _weighted_choice(rng: random.Random, items: list[str], weights: list[int]) -> str:
    return rng.choices(items, weights=weights, k=1)[0]


def avatar_traits_for(username_hash: str, fictional_name: str) -> dict[str, str]:
    """Return coherent, varied portrait cues; every choice is stable for the user hash."""
    parts = fictional_name.strip().split()
    first_name = parts[0].casefold()
    presentation = "woman" if first_name in FEMININE_GIVEN_NAMES else "man"
    region = _cultural_background(fictional_name)
    seed = int.from_bytes(hashlib.sha256(f"review-avatar-v2:{username_hash}".encode()).digest(), "big")
    rng = random.Random(seed)

    skin_weights = {
        "Korean": [4, 32, 42, 16, 5, 1, 0],
        "Japanese": [5, 33, 40, 15, 5, 1, 1],
        "Chinese or Chinese diaspora": [5, 30, 38, 16, 8, 2, 1],
        "South Asian": [1, 6, 20, 24, 28, 16, 5],
        "West African": [0, 1, 3, 8, 22, 39, 27],
        "East African": [1, 4, 10, 20, 30, 24, 11],
        "Middle Eastern or North African": [2, 10, 20, 30, 26, 10, 2],
        "Latin American": [2, 8, 18, 24, 25, 17, 6],
        "Italian": [5, 23, 30, 23, 14, 4, 1],
        "French": [10, 31, 27, 17, 10, 4, 1],
        "German-speaking European": [14, 38, 24, 12, 8, 3, 1],
        "Nordic": [20, 40, 22, 9, 6, 2, 1],
        "Central or Eastern European": [10, 34, 27, 15, 9, 4, 1],
        "English-speaking or North American": [10, 25, 22, 15, 14, 9, 5],
    }
    skin = _weighted_choice(rng, SKIN_TONES, skin_weights[region])

    hair_weights = {
        "Korean": [55, 37, 6, 1, 0, 0, 1],
        "Japanese": [54, 37, 7, 1, 0, 0, 1],
        "Chinese or Chinese diaspora": [51, 37, 8, 2, 1, 0, 1],
        "South Asian": [38, 37, 16, 5, 2, 1, 1],
        "West African": [62, 25, 8, 2, 1, 0, 2],
        "East African": [35, 34, 18, 7, 2, 1, 3],
        "Middle Eastern or North African": [27, 38, 22, 8, 2, 1, 2],
        "Latin American": [20, 33, 23, 10, 5, 3, 6],
        "Italian": [20, 33, 25, 11, 5, 2, 4],
        "French": [16, 26, 24, 10, 8, 8, 8],
        "German-speaking European": [14, 24, 24, 9, 5, 14, 10],
        "Nordic": [9, 18, 18, 7, 3, 28, 17],
        "Central or Eastern European": [16, 27, 24, 10, 5, 9, 9],
        "English-speaking or North American": [18, 27, 20, 8, 7, 12, 8],
    }
    age = rng.choice(AGE_RANGES)
    non_gray_weights = hair_weights[region][:-1]
    hair = _weighted_choice(rng, HAIR_COLORS[:-1], non_gray_weights)
    if age in {"50–59", "60–69"} and rng.random() < 0.28:
        hair = "silver-gray"

    # Brown eyes are common everywhere. Blue, green, and gray stay rare for names
    # associated with regions where they would be less common, avoiding arbitrary combos.
    eye_weights = {
        "Korean": [91, 7, 1, 1, 0],
        "Japanese": [90, 7, 1, 1, 1],
        "Chinese or Chinese diaspora": [89, 8, 1, 1, 1],
        "South Asian": [82, 14, 1, 2, 1],
        "West African": [93, 7, 0, 0, 0],
        "East African": [90, 8, 0, 1, 1],
        "Middle Eastern or North African": [78, 16, 2, 2, 2],
        "Latin American": [72, 18, 4, 4, 2],
        "Italian": [62, 22, 6, 7, 3],
        "French": [46, 22, 15, 12, 5],
        "German-speaking European": [43, 18, 20, 13, 6],
        "Nordic": [38, 15, 26, 14, 7],
        "Central or Eastern European": [50, 20, 15, 10, 5],
        "English-speaking or North American": [53, 20, 12, 10, 5],
    }
    if skin in {"deep", "very deep"}:
        eyes = _weighted_choice(rng, ["brown", "hazel"], [94, 6])
    else:
        eyes = _weighted_choice(rng, EYE_COLORS, eye_weights[region])
    hair_style = rng.choice(HAIR_STYLES_WOMAN if presentation == "woman" else HAIR_STYLES_MAN)
    beard_style = rng.choices(["none", "light stubble", "short beard", "full beard"], [5, 2, 2, 1])[0] if presentation == "man" else "none"
    # Keep scene variety independent from the demographic choices above so that
    # adding or tuning portrait traits cannot bunch many users into one setting.
    scene_seed = int.from_bytes(hashlib.sha256(f"review-avatar-scene-v1:{username_hash}".encode()).digest(), "big")
    scene_type, scene = random.Random(scene_seed).choice(SCENES)
    city = rng.choice(CITY_BY_REGION[region])
    background = f"{scene} in {city}"
    clothing = rng.choice(CLOTHING)
    nose = rng.choice(NOSE_SHAPES)
    age_decade = int(age.split("–", 1)[0]) // 10 * 10
    pronoun = "her" if presentation == "woman" else "his"
    subject_pronoun = "She" if presentation == "woman" else "He"
    if hair_style == "short bob":
        hair_description = f"a short {hair} bob"
    elif hair_style == "short pixie":
        hair_description = f"a short {hair} pixie cut"
    elif hair_style == "long braided":
        hair_description = f"long {hair} braids"
    elif hair_style.endswith("locs"):
        length = "shoulder-length" if hair_style.startswith("shoulder") else "short"
        hair_description = f"{length} {hair} locs"
    elif hair_style == "shaved":
        hair_description = "a shaved head"
    else:
        hair_description = f"{hair_style} {hair} hair"
    beard_description = {
        "light stubble": "light stubble",
        "short beard": "a short beard",
        "full beard": "a full beard",
    }.get(beard_style, "")
    family_roots = {
        "English-speaking or North American": "English-speaking or North American",
        "Chinese or Chinese diaspora": "Chinese or Chinese-diaspora",
        "Middle Eastern or North African": "Middle Eastern or North African",
    }.get(region, region)
    description = (
        f"Photographic profile portrait of a fictional {presentation} in {pronoun} {age_decade}s with {family_roots} family roots. "
        f"{subject_pronoun} has {skin} skin, {hair_description}, {eyes} eyes, and a {nose} nose. "
        f"{subject_pronoun} has {beard_description}. " if beard_description else
        f"Photographic profile portrait of a fictional {presentation} in {pronoun} {age_decade}s with {family_roots} family roots. "
        f"{subject_pronoun} has {skin} skin, {hair_description}, {eyes} eyes, and a {nose} nose. "
    )
    description += (
        f"{subject_pronoun} wears {clothing}. The background shows {background}; the real setting is recognizable but softly out of focus. "
        "Candid everyday profile photo, natural daylight, realistic skin texture."
    )
    return {
        "presentation": presentation,
        "cultural_background": region,
        "age_range": age,
        "skin_tone": skin,
        "hair_style": hair_style,
        "hair_color": hair,
        "beard_style": beard_style,
        "eye_color": eyes,
        "nose_shape": nose,
        "background": background,
        "background_type": scene_type,
        "clothing": clothing,
        "description": description,
    }
