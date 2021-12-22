namespace MovieMaker.Service.Provider.Bll.Auth
{
    public class PassCipher
    {
        private readonly static PassCipher _instance = new PassCipher();

        private PassCipher()
        {
        }

        public static PassCipher GetInstance() => _instance;

        public string Cipher(string input)
        {
            return input;
        }

        public string Decipher(string input)
        {
            return input;
        }
    }
}
