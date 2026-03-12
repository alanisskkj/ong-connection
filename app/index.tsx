import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      { }
      <View style={styles.header}>
        <Image
          source={require('../assets/images/ong-logo.png')}
          style={styles.logo}
        />

        <View style={styles.headerButton}>
          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => console.log('Login')}
          >
            <Text style={styles.buttonTextHeader}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => console.log('Cadastrar')}
          >
            <Text style={styles.buttonTextHeader}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      { }
      <ScrollView showsVerticalScrollIndicator={false}>

        { }
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar projetos no seu bairro..."
            placeholderTextColor="#888"
          />
        </View>

        { }
        <View style={styles.centerContent}>
          <Image
            source={require('../assets/images/header-ong (2).png')}
            style={styles.imageHeader}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Conhecer Projetos')}
          >
            <Text style={styles.buttonText}>Conhecer Projetos</Text>
          </TouchableOpacity>
        </View>

        { }
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Causas Urgentes : </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Abrigo Patinhas</Text>
              <Text style={styles.cardSub}>Faltam 20kg de ração para o final de semana.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Doar Agora</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Sopa do Bem</Text>
              <Text style={styles.cardSub}>Precisamos de 3 voluntários para hoje às 19h.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Ser Voluntário</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1dfffff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    height: 120,
  },

  headerButton: {
    flexDirection: "row",
    gap: 10,
  },

  logo: {
    width: 140,
    height: 100,
    resizeMode: "contain",
  },

  centerContent: {
    alignItems: "center",
    paddingVertical: 20,
  },

  button: {
    backgroundColor: "#c2a0e5ff",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  buttonHeader: {
    backgroundColor: "#c2a0e5ff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: '600',
  },

  buttonTextHeader: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: '600',
  },

  imageHeader: {
    width: '100%',
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },

  searchContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    elevation: 2,
  },
  impactBadge: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0c3fc',
  },
  impactText: {
    color: "#6A1B9A",
    fontWeight: "600",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 15,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: "#fff",
    width: 260,
    padding: 15,
    borderRadius: 20,
    marginRight: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSub: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
    lineHeight: 20,
  },
  cardButton: {
    backgroundColor: "#c2a0e5ff",
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "bold",
  }
});