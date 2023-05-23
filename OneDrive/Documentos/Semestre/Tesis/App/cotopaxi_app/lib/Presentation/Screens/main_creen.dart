import 'package:cotopaxi_app/Presentation/Screens/Views/camera_view.dart';
import 'package:cotopaxi_app/Presentation/Screens/Views/history_view.dart';
import 'package:cotopaxi_app/Presentation/Screens/Views/home_view.dart';
import 'package:cotopaxi_app/Presentation/Screens/Views/profile_view.dart';
import 'package:cotopaxi_app/Presentation/Screens/Views/routes_view.dart';
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {

  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {

    final colors =  Theme.of(context).colorScheme;

    final screens = [
      const HomeView(),
      HistoryView(),
      CameraView(),
      RoutesView(),
      ProfileView()
    ];

    return Scaffold(
      body: IndexedStack(
        index: selectedIndex, 
        children: screens,
      ),

      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.shifting,
        currentIndex: selectedIndex,
        onTap: (value) {
          setState(() {
            selectedIndex = value;
          });
        },
        elevation: 0,
        items: [
          BottomNavigationBarItem(
            icon: const Icon(Icons.home_rounded),
            activeIcon: const  Icon(Icons.home_rounded),
            label: 'Inicio',
            backgroundColor: colors.primary, 
            ),
           
            BottomNavigationBarItem(
            icon: const Icon(Icons.menu_book_sharp),
            activeIcon: const  Icon(Icons.menu_book_sharp),
            label: 'Historia',
            backgroundColor: colors.tertiary, 
            ),

            BottomNavigationBarItem(
            icon: const Icon(Icons.camera_alt_outlined),
            activeIcon: const  Icon(Icons.camera_alt_outlined),
            label: 'Camara',
            backgroundColor: colors.tertiary, 
            ),

            BottomNavigationBarItem(
            icon: const Icon(Icons.roundabout_right_rounded),
            activeIcon: const  Icon(Icons.roundabout_right_rounded),
            label: 'Rutas',
            backgroundColor: colors.tertiary, 
            ),

            BottomNavigationBarItem(
            icon: const Icon(Icons.person),
            activeIcon: const  Icon(Icons.person),
            label: 'Perfil',
            backgroundColor: colors.tertiary, 
            ),
        ],
      ),
    );
  }
}