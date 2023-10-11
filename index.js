import dotenv from 'dotenv'
import {createClient} from '@supabase/supabase-js'

import equipments from './data/equipments.json' assert {type: 'json'};
import equipments_public from './data/equipments_public.json' assert {type: 'json'};
import items from './data/items.json' assert {type: 'json'};
import locations from './data/locations.json' assert {type: 'json'};
import skills from './data/skills.json' assert {type: 'json'};
import materias from './data/materias.json' assert {type: 'json'};
import spells from './data/spells.json' assert {type: 'json'};
import enemies from './data/enemies.json' assert {type: 'json'};


async function main() {
    dotenv.config()

    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
        db: {
            schema: 'ffviir'
        }
    })


    // for (const item of skills.skillsCategorized.materias) {
    //     const {error} = await supabase
    //         .from('skill')
    //         .upsert({
    //             id: item.id,
    //             is_active: item.isActive,
    //             picture: item.picture,
    //             created_at: item.createdAt,
    //             updated_at: item.updatedAt,
    //             slug: item.slug,
    //             name: item.name,
    //             description: item.description,
    //             bonus_master: item.bonusMaster,
    //             is_transcendence: item.isTranscendence,
    //             character_id: item.character_id,
    //         });
    //     if (error) {
    //         console.log('error inserting: ', error)
    //     } else {
    //         console.log('inserted: ', item.id, item.name)
    //     }
    // }


    // const allEquipments = equipments.equipments.arme.concat(
    //     equipments.equipments.armure,
    //     equipments.equipments.accessoire,
    // )
    //
    // for (const item of allEquipments) {
    //     const {error} = await supabase
    //         .from('equipment')
    //         .upsert({
    //             id: item.id,
    //             is_active: item.isActive,
    //             picture: item.picture,
    //             created_at: item.createdAt,
    //             updated_at: item.updatedAt,
    //             slug: item.slug,
    //             name: item.name,
    //             description: item.description,
    //             effects: item.effects,
    //             physical_strength: item.physicalStrength,
    //             physical_defense: item.physicalDefense,
    //             magical_strength: item.magicalStrength,
    //             magical_defense: item.magicalDefense,
    //             materia_slots: item.materiaSlots,
    //             materia_max_slots: item.materiaMaxSlots,
    //             category_id: item.category_id,
    //             character_id: item.character_id,
    //             skill_id: item.skill_id,
    //         });
    //     if (error) {
    //         console.log('error inserting materia: ', error)
    //     } else {
    //         console.log('inserted item: ', item.id, item.name)
    //     }
    // }


    // const allItems = items.itemsCategorized.musique.concat(
    //     items.itemsCategorized.consommable,
    //     items.itemsCategorized["livres-d-apprentissage"],
    //     items.itemsCategorized["objet-cle"],
    // )
    // for (const item of allItems) {
    //     if (item.locations?.length > 0) {
    //         const response = await fetch(`https://ffviir.fr/_next/data/ug28z38KfezG6t7bCjv9g/objets/${item.slug}.json`)
    //         const json = await response.json()
    //         const {locationNotes} = json.pageProps
    //
    //         for (const locationNote of locationNotes) {
    //             const {error} = await supabase
    //                 .from('item_location_note')
    //                 .upsert({
    //                     id: locationNote.id,
    //                     description: locationNote.description,
    //                     price: locationNote.price,
    //                     is_active: locationNote.isActive,
    //                     created_at: locationNote.createdAt,
    //                     updated_at: locationNote.updatedAt,
    //                     location_id: locationNote.location?.id,
    //                     category_id: locationNote.category?.id,
    //                     item_id: item.id,
    //                 });
    //             if (error) {
    //                 console.log('error inserting locationNote : ', error)
    //             } else {
    //                 console.log('inserted locationNote: ', locationNote.id, locationNote.name)
    //             }
    //         }
    //     }
    //
    //     const {error} = await supabase
    //         .from('item')
    //         .upsert({
    //             id: item.id,
    //             is_active: item.isActive,
    //             picture: item.picture,
    //             created_at: item.createdAt,
    //             updated_at: item.updatedAt,
    //             slug: item.slug,
    //             name: item.name,
    //             description: item.description,
    //             category_id: item.category_id,
    //         });
    //     if (error) {
    //         console.log('error inserting item: ', error)
    //     } else {
    //         console.log('inserted item: ', item.id, item.name)
    //     }
    // }


    // const allMaterias = materias.materiasCategorized.commande.concat(
    //     materias.materiasCategorized.magique,
    //     materias.materiasCategorized.support,
    //     materias.materiasCategorized.independante,
    //     materias.materiasCategorized.invocation
    // )
    //
    // for (const materia of allMaterias) {
    //     if (materia.locations?.length > 0) {
    //         const response = await fetch(`https://ffviir.fr/_next/data/ug28z38KfezG6t7bCjv9g/materias/${materia.slug}.json`)
    //         const json = await response.json()
    //         const {locationNotes} = json.pageProps
    //
    //         for (const locationNote of locationNotes) {
    //             const {error} = await supabase
    //                 .from('materia_location_note')
    //                 .upsert({
    //                     id: locationNote.id,
    //                     description: locationNote.description,
    //                     price: locationNote.price,
    //                     is_active: locationNote.isActive,
    //                     created_at: locationNote.createdAt,
    //                     updated_at: locationNote.updatedAt,
    //                     location_id: locationNote.location?.id,
    //                     category_id: locationNote.category?.id,
    //                     materia_id: materia.id,
    //                 });
    //             if (error) {
    //                 console.log('error inserting : ', error)
    //             } else {
    //                 console.log('inserted: ', locationNote.id, locationNote.name)
    //             }
    //         }
    //     }
    //
    //     const {error} = await supabase
    //         .from('materia')
    //         .upsert({
    //             id: materia.id,
    //             is_active: materia.isActive,
    //             picture: materia.picture,
    //             created_at: materia.createdAt,
    //             updated_at: materia.updatedAt,
    //             slug: materia.slug,
    //             name: materia.name,
    //             description: materia.description,
    //             attributes_effects: materia.attributesEffects,
    //             level_max: materia.levelMax,
    //             level1_effects: materia.level1Effects,
    //             level2ap: materia.level2AP,
    //             level2_effects: materia.level2Effects,
    //             level3_effects: materia.level3Effects,
    //             level3ap: materia.level3AP,
    //             level4_effects: materia.level4Effects,
    //             level4ap: materia.level4AP,
    //             level5_effects: materia.level5Effects,
    //             level5ap: materia.level5AP,
    //             category_id: materia.category_id,
    //         });
    //     if (error) {
    //         console.log('error inserting : ', error)
    //     } else {
    //         console.log('inserted: ', materia.id, materia.name)
    //     }
    // }


    for (const enemy of enemies.enemies) {
        const {error} = await supabase
            .from('enemy')
            .upsert({
                id: enemy.id,
                is_active: enemy.isActive,
                picture: enemy.picture,
                created_at: enemy.createdAt,
                updated_at: enemy.updatedAt,
                slug: enemy.slug,
                name: enemy.name,
                is_boss: enemy.isBoss,
                hp: enemy.hp,
                description: enemy.description,
                strategy: enemy.strategy,
                exp: enemy.exp,
                ap: enemy.ap,
                gil: enemy.gil,
                type_id: enemy.type_id,
                category_id: enemy.category_id,
            });
        if (error) {
            console.log('error inserting: ', error)
        } else {
            console.log('inserted: ', enemy.id, enemy.name)
        }

        const response = await fetch(`https://ffviir.fr/_next/data/ug28z38KfezG6t7bCjv9g/ennemis/${enemy.slug}.json`)
        const json = await response.json()
        const {
            locationNotes,
            enemy: {
                droppedItems,
                droppedRareItems,
                stealableItems,
                weaknesses,
                lowResistances,
                highResistances,
                immunities,
                absorptions,
            }
        } = json.pageProps


        for (const location of locationNotes) {
            const {error} = await supabase
                .from('enemy_location_note')
                .upsert({
                    id: location.id,
                    description: location.description,
                    price: location.price,
                    is_active: location.isActive,
                    created_at: location.createdAt,
                    updated_at: location.updatedAt,
                    enemy_id: enemy.id,
                    location_id: location.location?.id,
                    category_id: location.category?.id,
                })
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', location.id, location.name)
            }
        }

        for (const droppedItem of droppedItems) {
            const {error} = await supabase
                .from('enemy_dropped_items_item')
                .upsert({
                    item_id: droppedItem.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', droppedItem.id, droppedItem.name)
            }
        }

        for (const droppedRareItem of droppedRareItems) {
            const {error} = await supabase
                .from('enemy_dropped_rare_items_item')
                .upsert({
                    item_id: droppedRareItem.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', droppedRareItem.id, droppedRareItem.name)
            }
        }

        for (const stealableItem of stealableItems) {
            const {error} = await supabase
                .from('enemy_stealable_items_item')
                .upsert({
                    item_id: stealableItem.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', stealableItem.id, stealableItem.name)
            }
        }

        for (const weakness of weaknesses) {
            const {error} = await supabase
                .from('enemy_weaknesses_combat_attribute')
                .upsert({
                    combat_attribute_id: weakness.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', weakness.id, weakness.name)
            }
        }

        for (const lowResistance of lowResistances) {
            const {error} = await supabase
                .from('enemy_low_resistances_combat_attribute')
                .upsert({
                    combat_attribute_id: lowResistance.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', lowResistance.id, lowResistance.name)
            }
        }

        for (const highResistance of highResistances) {
            const {error} = await supabase
                .from('enemy_high_resistances_combat_attribute')
                .upsert({
                    combat_attribute_id: highResistance.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', highResistance.id, highResistance.name)
            }
        }

        for (const immunity of immunities) {
            const {error} = await supabase
                .from('enemy_immunities_combat_attribute')
                .upsert({
                    combat_attribute_id: immunity.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', immunity.id, immunity.name)
            }
        }

        for (const absorption of absorptions) {
            const {error} = await supabase
                .from('enemy_absorptions_combat_attribute')
                .upsert({
                    combat_attribute_id: absorption.id,
                    enemy_id: enemy.id,
                });
            if (error) {
                console.log('error inserting: ', error)
            } else {
                console.log('inserted: ', absorption.id, absorption.name)
            }
        }
    }

    // const weapons = equipments.equipments.arme;
    // for (const weapon of weapons) {
    //     const response = await fetch(`https://ffviir.fr/_next/data/ug28z38KfezG6t7bCjv9g/equipements/${weapon.slug}.json`)
    //     const json = await response.json()
    //     const {locationNotes, weaponCores, coreUpdateCalues} = json.pageProps
    //
    //     for (const location of locationNotes) {
    //         const {error} = await supabase
    //             .from('equipment_location_note')
    //             .upsert({
    //                 id: location.id,
    //                 description: location.description,
    //                 price: location.price,
    //                 is_active: location.isActive,
    //                 created_at: location.createdAt,
    //                 updated_at: location.updatedAt,
    //                 equipment_id: weapon.id,
    //                 location_id: location.location?.id,
    //                 category_id: location.category?.id,
    //             })
    //         if (error) {
    //             console.log('error inserting: ', error)
    //         } else {
    //             console.log('inserted: ', location.id, location.name)
    //         }
    //     }
    //
    //     for (const weaponCore of weaponCores) {
    //         const {error} = await supabase
    //             .from('weapon_core')
    //             .upsert({
    //                 id: weaponCore.id,
    //                 is_active: weaponCore.isActive,
    //                 picture: weaponCore.picture,
    //                 created_at: weaponCore.createdAt,
    //                 updated_at: weaponCore.updatedAt,
    //                 level: weaponCore.level,
    //                 points: weaponCore.points,
    //                 weapon_id: weapon.id,
    //             })
    //         if (error) {
    //             console.log('error inserting: ', error)
    //         } else {
    //             console.log('inserted: ', weaponCore.id, weaponCore.name)
    //         }
    //
    //         for (const weaponCoreUpdate of weaponCore.weaponCoreUpdates) {
    //             if (weaponCoreUpdate.condition?.id) {
    //                 const {error} = await supabase
    //                     .from('weapon_core_update_condition')
    //                     .upsert({
    //                         id: weaponCoreUpdate.condition?.id,
    //                         slug: weaponCoreUpdate.condition?.slug,
    //                         name: weaponCoreUpdate.condition?.name,
    //                     })
    //                 if (error) {
    //                     console.log('error inserting: ', error)
    //                 } else {
    //                     console.log('inserted: ', weaponCoreUpdate.condition.id, weaponCoreUpdate.condition.name)
    //                 }
    //             }
    //             if (weaponCoreUpdate.category?.id) {
    //                 const {error} = await supabase
    //                     .from('weapon_core_update_category')
    //                     .upsert({
    //                         id: weaponCoreUpdate.category?.id,
    //                         slug: weaponCoreUpdate.category?.slug,
    //                         name: weaponCoreUpdate.category?.name,
    //                     })
    //                 if (error) {
    //                     console.log('error inserting: ', error)
    //                 } else {
    //                     console.log('inserted: ', weaponCoreUpdate.category.id, weaponCoreUpdate.category.name)
    //                 }
    //             }
    //             const {error} = await supabase
    //                 .from('weapon_core_update')
    //                 .upsert({
    //                     id: weaponCoreUpdate.id,
    //                     is_active: weaponCoreUpdate.isActive,
    //                     picture: weaponCoreUpdate.picture,
    //                     created_at: weaponCoreUpdate.createdAt,
    //                     updated_at: weaponCoreUpdate.updatedAt,
    //                     effect: weaponCoreUpdate.effect,
    //                     value: weaponCoreUpdate.value,
    //                     rank: weaponCoreUpdate.rank,
    //                     description: weaponCoreUpdate.description,
    //                     condition_id: weaponCoreUpdate.condition?.id,
    //                     category_id: weaponCoreUpdate.category?.id,
    //                     weapon_core_id: weaponCore.id,
    //                 })
    //             if (error) {
    //                 console.log('error inserting: ', error)
    //             } else {
    //                 console.log('inserted: ', weaponCore.id, weaponCore.name)
    //             }
    //         }
    //     }
    // }
}

main()
