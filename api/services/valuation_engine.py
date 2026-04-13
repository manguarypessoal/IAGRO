from datetime import datetime

class IAGROValuationEngine:
    """
    Motor de precificação multidimensional para ativos rurais no MATOPIBA.
    """
    
    @staticmethod
    def calculate_machine_value(base_price: float, hours_used: int, year: int) -> dict:
        # Depreciação dinâmica considerando uso e idade [cite: 139]
        age = datetime.now().year - year
        depreciation_rate = 0.05 + (hours_used / 10000) * 0.1  # Fator regional
        current_value = base_price * (1 - depreciation_rate) ** age
        
        return {
            "asset_type": "Mechanical",
            "valuation": round(max(current_value, base_price * 0.2), 2),
            "liquidity_score": "High" if hours_used < 2000 else "Medium"
        }

    @staticmethod
    def calculate_land_value(hectares: float, productivity_index: float, region: str) -> dict:
        # Valuation de terras integrando aptidão do solo e região [cite: 140]
        base_ha_price = 15000 if region == "TO" else 12000 # Preços base MATOPIBA
        valuation = hectares * base_ha_price * (productivity_index / 100)
        
        return {
            "asset_type": "Land Intelligence",
            "valuation": round(valuation, 2),
            "compliance_status": "Verified" # Simulação de check de desmatamento [cite: 95]
        }
