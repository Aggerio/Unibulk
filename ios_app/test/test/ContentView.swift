import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            Color(.black)
                .ignoresSafeArea()
                .overlay(
                    ScrollView {
                        VStack(spacing: 20) {
                            HStack {
                                Button(action: {
                                    
                                    print("Logo button tapped")
                                }) {
                                    Image("logo")
                                        .resizable()
                                        .aspectRatio(contentMode: .fit)
                                        .frame(width: 100, height: 100)
                                        .position(x: 50, y: 50)
                                }
                                
                                Button(action: {
                                    
                                    print("Person button tapped")
                                }) {
                                    Image(systemName: "person.fill")
                                        .foregroundColor(.blue)
                                        .scaleEffect(1.5)
                                        .frame(width: 200, height: 200)
                                        .position(x: 50, y: 50)
                                        .padding(.leading, 130)
                                }
                                
                                Button(action: {
                                    
                                    print("Pip button tapped")
                                }) {
                                    Image(systemName: "pip.exit")
                                        .foregroundColor(.blue)
                                        .scaleEffect(1.5)
                                        .frame(width: 150, height: 150)
                                        .position(x: 50, y: 50)
                                        .padding(.leading, 50)
                                }
                            }
                           
                            NavigationLink(destination: ProductDetailView(productName: "iPhone 14 Pro Max")) {
                                CardView(imageName: "Iphone", title: "iPhone 14 Pro Max")
                            }
                            
                            CardView(imageName: "airpods", title: "Airpods Pro II")
                            CardView(imageName: "speaker", title: "Marshall Stanmore II")
                            CardView(imageName: "jordans", title: "Air Jordan I Highs")
                            CardView(imageName: "iwatch", title: "Apple Watch Series 8")
                            CardView(imageName: "keyboard", title: "Razer X Gaming Mechanical Keyboard")
                        }
                        .padding()
                    }
                )
                .navigationTitle("Products")
        }
    }
}

struct CardView: View {
    let imageName: String
    let title: String
    
    var body: some View {
        VStack {
            Button(action: {
                
                print("\(title) button tapped")
            }) {
                Image(imageName)
                    .resizable()
                    .cornerRadius(10)
                    .aspectRatio(contentMode: .fit)
            }
            
            Text(title)
                .font(.title)
                .fontWeight(.bold)
                .multilineTextAlignment(.leading)
                .padding()
                .foregroundColor(.black)
        }
        .padding()
        .background(Rectangle().foregroundColor(.white))
        .cornerRadius(15)
        .shadow(radius: 10)
        .padding()
    }
}

struct ProductDetailView: View {
    let productName: String
    
    var body: some View {
        ZStack{
           /* Color(.black)
                .ignoresSafeArea()*/
            VStack {
                Image("Iphone")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .cornerRadius(10)
                
                Text("Specifications: ")
                    .font(.body)
                    .multilineTextAlignment(.leading)
                    .padding()
                Text("Super Retina XDR display")
                Text("6.7 inch all screen OLED display")
                Text("A16 Bionic Chip")
                Text("6‑core CPU with 2 performance and 4 efficiency cores")
                Text("5‑core GPU")
                Text("16‑core Neural Engine")
                Text("48MP Main Camera")
                Text("12MP Ultra Wide Camera")
                
                
                
            }
            
        }
        .navigationTitle(productName)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
