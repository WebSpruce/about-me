import type { Project } from '../types/project';
import leafy_transport_logo from '../assets/leafy_transport_logo.ico'

export const projects: Project[] = [
    {
        id: 'leafy-transport',
        title: 'Leafy-Transport',
        tagline: 'A multi-tenant transport management platform.',
        description: [
          'Transport planning gets expensive when it’s done in spreadsheets or chat: vehicles get overloaded, jobs are assigned too far apart to be realistic, and deliveries for the same client aren’t consolidated-creating extra trips and wasted hours.',
          'This web app reduces operational friction by turning dispatch into a fast, rule-driven workflow. It centralizes employees, vehicle assignments, and delivery invoices (including cargo weight, quantity, and destination). By digitizing the entire lifecycle-from warehouse planning to final doorstep delivery-the system eliminates paper management and ensures real-time visibility across multiple warehouse locations.',
          'Automated Error Prevention: Capacity Validation, Route Logic, Smart Consolidation',
          'Digital Proof of Delivery (PoD): Paperless, Verification, Cloud',
          'Intelligent Dispatching: Automated Transitions, Real-time Tracking',
          'AI Invoice Assistant (RAG): Ask natural-language questions about invoices, failures and deliveries.'
        ],
        techStack: ['.NET 9 (ASP.NET MVC & Web API)', 'Clean Architecture, CQRS, Repository Pattern, Dependency Injection', '.PostgreSQL (Npgsql)', 'JWT Authentication, 2FA, Email Verification, Multi-tenancy',
            'JavaScript, Tailwind CSS v4', 'Fluent Validation', 'Azure Blob Storage, Docker Compose', 'xUnit, Moq', 'RAG, Semantic Search, LLM'
        ],
        repoUrl: undefined,
        demoUrl: 'https://leafy-transport2-ckbcasc2dmbyctbb.polandcentral-01.azurewebsites.net/',
        imageUrl: leafy_transport_logo,
    },
    {
        id: 'leafy-transport-driver',
        title: 'Leafy-Transport Driver',
        tagline: 'A specialized Android companion application designed to work in tandem with the Leafy-Transport Web Dispatch System.',
        description: [
          'The app serves as the primary interface for drivers to manage their assigned vehicle loads, execute deliveries, and report field exceptions (failures) directly to the central dispatch office in real-time.',
          'Load & Vehicle Management',
          'Proof of Delivery (PoD) - Barcode Scanning, E-Signature Capture',
          'Delivery Failure Reporting',
          'Intelligent Route Optimization'
        ],
        techStack: ['Kotlin Android', 'Clean Architecture, Dependency Injection', 'Hilt', 'Retrofit'
        ],
        repoUrl: 'https://github.com/WebSpruce/leafy-transport-mobile',
        demoUrl: 'https://appetize.io/app/b_dfrpc7dv6xe2piy4imyyp32rk4',
        imageUrl: leafy_transport_logo,
    },
    {
        id: 'calmska',
        title: 'Calmska',
        tagline: 'AI‑assisted mood tracker with Pomodoro timer and Hygge‑inspired wellbeing tips.',
        description: [
          'Calmska lets you log how you feel in natural language; an AI model turns your text into a single mood and stores it in your history. After at least five days of entries, the app can analyze your recent moods and suggest short, practical Hygge‑style tips tailored to your patterns. A built‑in Pomodoro timer with background notifications helps you structure focused work and breaks alongside mood tracking.',
          'AI “firewall” that screens both prompts and responses',
          'AI mood entry',
          'Mood history & analysis',
          'Pomodoro timer',
          'Account & sync'
        ],
        techStack: ['.NET MAUI (Android‑first), MVVM with CommunityToolkit.Mvvm, CommunityToolkit.Maui, Plugin.Maui.Audio.', 'ASP.NET Core minimal APIs, Entity Framework Core, MongoDB, API versioning, OpenAPI/Scalar UI for docs.', 
            'Firebase email/password authentication', 'Clean Architecture, Dependency Injection, AutoMapper, MediatR', 'xUnit, Fluent Assertions, Moq'
        ],
        repoUrl: 'https://github.com/WebSpruce/Calmska',
        demoUrl: 'https://appetize.io/app/b_6ufaefa2ofs4ki5t3rgcj2cnaa',
        imageUrl: 'https://github.com/WebSpruce/Calmska/raw/main/CALMSKA.gif'
    },
    {
        id: 'ftp-client',
        title: 'FTP Client',
        tagline: 'The FTP client allows you to connect to the server quickly, securely and conveniently via the SFTP protocol.',
        description: [
          'You can easily manage your files and folders, view their sizes, and transfer them between your local system and the server. Thanks to the user interface, the user has the ability to upload and download files from the server intuitively. It is possible to adjust the settings through a convenient configuration window and to create and change profiles saved in the .json file. ',
          'A convenient way of saving connection strings in the history page allows you to quickly set the required information.',
        ],
        techStack: ['Avalonia UI', 'Linux/Windows',
        ],
        repoUrl: 'https://github.com/WebSpruce/FTPClient',
        demoUrl: undefined,
        imageUrl: 'https://github.com/WebSpruce/FTPClient/raw/main/AppScreenshots/ftp_client.gif?raw=true',
    },
]