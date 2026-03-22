actor {
  type TokenStats = {
    price : Nat;
    marketCap : Nat;
    holderCount : Nat;
  };

  var tokenStats : TokenStats = {
    price = 0;
    marketCap = 0;
    holderCount = 0;
  };

  public query ({ caller }) func getTokenStats() : async TokenStats {
    tokenStats;
  };
};
