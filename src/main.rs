use axum::Router;
use std::{net::SocketAddr, env};
use tower_http::services::ServeDir;

#[tokio::main]
async fn main() {

    // build our application with a route
    let app = Router::new()
        //.route("/", get(handler))
        .nest_service("/", ServeDir::new("dist"));

    // run it
    let port = env::var("PORT").unwrap_or("80".to_string()).parse().unwrap();
    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    println!("listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}