// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Menu, Submenu};

fn main() {
    let new_todo = CustomMenuItem::new("new".to_string(), "Новая задача");
    let close = CustomMenuItem::new("quit".to_string(), "Выйти");
    let submenu = Submenu::new("Файл", Menu::new().add_item(new_todo).add_item(close));
    let menu = Menu::new()
        .add_submenu(submenu);

    tauri::Builder::default()
        // .menu(menu)
        // .on_menu_event(|event| {
        //     match event.menu_item_id() {
        //       "quit" => {
        //         std::process::exit(0);
        //       }
        //       "new" => {
        //         event.window().emit("new-todo", "").unwrap();
        //       },
        //       _ => {}
        //     }
        // })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
