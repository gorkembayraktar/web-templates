const fs = require('fs');
const path = require('path');

// Ana dizinler ve alt dizinler
const directoryStructure = {
    'egitim': [
        'dil-kurslari',
        'ozel-ders',
        'sinav-hazirlik',
        'uzaktan-egitim'
    ],
    'saglik': [
        'dis-klinigi',
        'fizik-tedavi',
        'psikoloji',
        'beslenme-diyet'
    ],
    'hizmet': [
        'temizlik',
        'guvenlik',
        'emlak',
        'organizasyon',
        'sigorta'
    ],
    'teknoloji': [
        'yazilim',
        'web-tasarim',
        'mobil-uygulama',
        'e-ticaret'
    ],
    'otomotiv': [
        'servis',
        'yedek-parca',
        'kiralama',
        'ekspertiz'
    ],
    'insaat': [
        'mimari',
        'dekorasyon',
        'peyzaj',
        'malzeme'
    ],
    'uretim': [
        'tekstil',
        'mobilya',
        'gida',
        'ambalaj'
    ],
    'guzellik': [
        'kuafor',
        'spa',
        'fitness',
        'kozmetik'
    ],
    'yeme-icme': [
        'restoran',
        'cafe',
        'pastane',
        'catering'
    ],
    'turizm': [
        'otel',
        'tur',
        'arac-kiralama',
        'seyahat'
    ],
    'finans': [
        'muhasebe',
        'yatirim',
        'kredi',
        'sigorta'
    ],
    'hukuk': [
        'avukatlik',
        'danismanlik',
        'tercume',
        'patent'
    ]
};

// Dizin oluşturma fonksiyonu
function createDirectory(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
            console.log(`✓ Dizin oluşturuldu: ${dirPath}`);
        }
    } catch (err) {
        console.error(`✗ Hata: ${dirPath} dizini oluşturulamadı:`, err);
    }
}

// Ana fonksiyon
function createDirectoryStructure() {
    console.log('Dizin yapısı oluşturuluyor...\n');

    // Ana dizinleri oluştur
    Object.keys(directoryStructure).forEach(mainDir => {
        const mainDirPath = path.join(__dirname, mainDir);
        createDirectory(mainDirPath);

        // Alt dizinleri oluştur
        directoryStructure[mainDir].forEach(subDir => {
            const subDirPath = path.join(mainDirPath, subDir);
            createDirectory(subDirPath);
        });
    });

    console.log('\nDizin yapısı oluşturma işlemi tamamlandı!');
}

// Programı çalıştır
createDirectoryStructure(); 